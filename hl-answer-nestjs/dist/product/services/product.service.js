"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../dto");
const database_service_1 = require("../../database/services/database.service");
const library_1 = require("@prisma/client/runtime/library");
let ProductService = class ProductService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        const products = await this.databaseService.product.findMany({
            include: {
                productDetailTranslations: true,
            },
        });
        return products;
    }
    async find(id) {
        try {
            const product = await this.databaseService.product.findUniqueOrThrow({
                where: {
                    id: id,
                },
                include: {
                    productDetailTranslations: true,
                },
            });
            return product;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    throw new common_1.NotFoundException("Product doesn't exist");
                }
            }
            throw error;
        }
    }
    async create(dto) {
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
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new common_1.ForbiddenException("Product detail with a language has duplication");
                }
                console.log("TESTSEET", error.code);
            }
            console.log("TESTSEET 2", error.code);
            throw error;
        }
    }
    async update(id, dto) {
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
                                in: dto.productDetailTranslations.map((detail) => detail.languageId),
                            },
                        },
                        createMany: {
                            data: dto.productDetailTranslations.map((detail) => {
                                return {
                                    name: detail.name,
                                    description: detail.description,
                                    languageId: detail.languageId,
                                };
                            }),
                        },
                    },
                },
                include: {
                    productDetailTranslations: true,
                },
            });
            return product;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new common_1.ForbiddenException("Product detail with a language has duplication");
                }
                if (error.code === "P2025") {
                    throw new common_1.NotFoundException("Product doesn't exist");
                }
            }
            throw error;
        }
    }
    async remove(id) {
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
    async search(dto) {
        const tsquerySpecialChars = /[()|&:*!]/g;
        const tsQuery = dto.keyword
            .replace(tsquerySpecialChars, " ")
            .trim()
            .split(/\s+/)
            .join(" | ");
        const tsLanguage = dto.languageId &&
            dto_1.SearchSupportedLanguageCode.includes(dto.languageId)
            ? Object.keys(dto_1.LanguageCode)[Object.values(dto_1.LanguageCode).indexOf(dto.languageId)].toLocaleLowerCase()
            : "simple";
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
            }
            catch (error) {
                throw error;
            }
        }
        else {
            try {
                const products = await this.databaseService
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
            }
            catch (error) {
                throw error;
            }
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProductService);
//# sourceMappingURL=product.service.js.map