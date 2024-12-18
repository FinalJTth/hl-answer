import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { LanguageCode, ProductDTO, SearchSupportedLanguageCode } from "../dto";
import { DatabaseService } from "../../database/services/database.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ProductSearchDTO } from "../dto/product-search.dto";

@Injectable()
export class ProductService {
    constructor(private databaseService: DatabaseService) {}

    async findAll() {
        const products = await this.databaseService.product.findMany({
            include: {
                productDetailTranslations: true,
            },
        });

        return products;
    }

    async find(id: number) {
        try {
            const product =
                await this.databaseService.product.findUniqueOrThrow({
                    where: {
                        id: id,
                    },
                    include: {
                        productDetailTranslations: true,
                    },
                });

            return product;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2025 : An operation failed because it depends on one or more records that were required but not found. {cause}
                if (error.code === "P2025") {
                    throw new NotFoundException("Product doesn't exist");
                }
            }

            throw error;
        }
    }

    async create(dto: ProductDTO) {
        try {
            const product = await this.databaseService.product.create({
                data: {
                    originalLanguageId: dto.originalLanguageId,
                    productDetailTranslations: {
                        create: dto.productDetailTranslations.map((detail) => {
                            return {
                                name: detail.name,
                                description: detail.description,
                                languageId: detail.languageId,
                            };
                        }),
                    },
                },
                include: {
                    productDetailTranslations: {
                        select: {
                            name: true,
                            description: true,
                            languageId: true,
                        },
                    },
                },
            });

            return product;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2002 : Unique constraint failed on the {constraint}
                if (error.code === "P2002") {
                    throw new ForbiddenException(
                        "Product detail with a language has duplication",
                    );
                }
                console.log("TESTSEET", error.code);
            }
            console.log("TESTSEET 2", error.code);
            throw error;
        }
    }

    async update(id: number, dto: ProductDTO) {
        try {
            const product = await this.databaseService.product.update({
                where: {
                    id: id,
                },
                data: {
                    originalLanguageId: dto.originalLanguageId,
                    productDetailTranslations: {
                        deleteMany: {
                            languageId: {
                                in: dto.productDetailTranslations.map(
                                    (detail) => detail.languageId,
                                ),
                            },
                        },
                        createMany: {
                            data: dto.productDetailTranslations.map(
                                (detail) => {
                                    return {
                                        name: detail.name,
                                        description: detail.description,
                                        languageId: detail.languageId,
                                    };
                                },
                            ),
                        },
                    },
                },
                include: {
                    productDetailTranslations: true,
                },
            });

            return product;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2002 : Unique constraint failed on the {constraint}
                if (error.code === "P2002") {
                    throw new ForbiddenException(
                        "Product detail with a language has duplication",
                    );
                }
                if (error.code === "P2025") {
                    throw new NotFoundException("Product doesn't exist");
                }
            }

            throw error;
        }
    }

    async remove(id: number) {
        const product = await this.databaseService.product.delete({
            where: {
                id: id,
            },
            include: {
                productDetailTranslations: true,
            },
        });

        return product;
    }

    async search(dto: ProductSearchDTO) {
        const tsquerySpecialChars = /[()|&:*!]/g;

        // User or here instead due to indexes search not being substring search.
        const tsQuery = dto.keyword
            .replace(tsquerySpecialChars, " ")
            .trim()
            .split(/\s+/)
            .join(" | ");

        // Get language string that is compatible with postgresql "regconfig" variable type
        const tsLanguage: string =
            dto.languageId &&
            SearchSupportedLanguageCode.includes(dto.languageId)
                ? Object.keys(LanguageCode)[
                      Object.values(LanguageCode).indexOf(dto.languageId)
                  ].toLocaleLowerCase()
                : "simple";

        // If the language doesn't support tsvector on postgresql then we just revert to brute force substring search
        if (tsLanguage === "simple") {
            try {
                const keywords = dto.keyword.split(" ");
                const products = await this.databaseService.product.findMany({
                    where: {
                        productDetailTranslations: {
                            some: {
                                AND: keywords.map((word) => ({
                                    OR: [
                                        {
                                            name: {
                                                contains: word,
                                                mode: "insensitive",
                                            },
                                        },
                                        {
                                            description: {
                                                contains: word,
                                                mode: "insensitive",
                                            },
                                        },
                                    ],
                                })),
                            },
                        },
                    },
                    select: {
                        id: true,
                    },
                    skip: dto.perPage * (dto.currentPage - 1),
                    take: dto.perPage,
                });

                return {
                    productIds: products.map((product) => product.id),
                };
            } catch (error) {
                throw error;
            }
        }
        // else we just use tsvector search
        else {
            try {
                /*
                const products = await this.databaseService.$queryRawUnsafe(`
                    SELECT pdt."productId"
                    FROM "productDetailTranslations" AS pdt
                    WHERE pdt."textSearch" @@ to_tsquery('${tsLanguage}', '${tsQuery}')
                    GROUP BY pdt."productId"
                    ORDER BY ts_rank(pdt."textSearch", to_tsquery('${tsLanguage}', '${tsQuery}')) DESC
                    LIMIT ${dto.perPage} OFFSET ${dto.perPage * (dto.currentPage - 1)}
                `);
                */
                const products: Array<any> = await this.databaseService
                    .$queryRawUnsafe(`
                    SELECT DISTINCT ON (pdt."productId") 
                        pdt."productId", 
                        pdt."name", 
                        pdt."description",
                        ts_rank(pdt."textSearch", to_tsquery('${tsLanguage}', '${tsQuery}')) AS rank
                    FROM "productDetailTranslations" pdt
                    WHERE pdt."textSearch" @@ to_tsquery('${tsLanguage}', '${tsQuery}')
                    ORDER BY pdt."productId", rank DESC
                    LIMIT ${dto.perPage} OFFSET ${dto.perPage * (dto.currentPage - 1)}
                `);

                return {
                    productIds: products.map((product) => product.productId),
                };
            } catch (error) {
                throw error;
            }
        }
    }
}
