import { Test, TestingModule } from "@nestjs/testing";
import { ProductController } from "./product.controller";
import { ProductService } from "../services/product.service";
import { LanguageCode, ProductDetailTranslationDTO, ProductDTO } from "../dto";
import { ProductSearchDTO } from "../dto/product-search.dto";

describe("Product Controller", () => {
    let controller: ProductController;
    let service: ProductService;

    interface ProductDetailTranslation {
        id: number;
        name: string;
        description: string;
        languageId: string;
        productId: number;
    }

    interface Product {
        id: number;
        originalLanguageId: string;
        productDetailTranslations: Array<ProductDetailTranslation>;
    }

    const mockProductService = {
        find: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
        search: jest.fn(),
    };

    const createdProduct: Product = {
        id: 1,
        originalLanguageId: "en",
        productDetailTranslations: [
            {
                id: 1,
                name: "Test",
                description: "This is a test product",
                languageId: "en",
                productId: 1,
            },
        ],
    };

    const updatedProduct: Product = {
        id: 1,
        originalLanguageId: "es",
        productDetailTranslations: [
            {
                id: 1,
                name: "Prueba",
                description: "Esta es una prueba.",
                languageId: "es",
                productId: 1,
            },
        ],
    };

    const productDTO: ProductDTO = {
        originalLanguageId: LanguageCode.English,
        productDetailTranslations: [
            new ProductDetailTranslationDTO(
                "Test",
                "This is a test.",
                LanguageCode.English,
            ),
        ],
    };

    const updatedProductDTO: ProductDTO = {
        originalLanguageId: LanguageCode.Spanish,
        productDetailTranslations: [
            new ProductDetailTranslationDTO(
                "Prueba",
                "Esta es una prueba.",
                LanguageCode.Spanish,
            ),
        ],
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [
                {
                    provide: ProductService,
                    useValue: mockProductService,
                },
            ],
        }).compile();

        controller = module.get<ProductController>(ProductController);
        service = module.get<ProductService>(ProductService);
    });

    describe("CRUD Test", () => {
        describe("Create", () => {
            it("Create and return a product", async () => {
                const createdProduct = { id: 1, ...productDTO };
                jest.spyOn(service, "create").mockResolvedValue(createdProduct);

                expect(await controller.create(productDTO)).toBe(
                    createdProduct,
                );
                expect(service.create).toHaveBeenCalledWith(productDTO);
            });
        });

        describe("Read", () => {
            it("Find and return a product", async () => {
                jest.spyOn(service, "find").mockResolvedValue(createdProduct);

                expect(await controller.find(1)).toBe(createdProduct);
                expect(await controller.find(0)).toBe(createdProduct);
                expect(service.find).toHaveBeenCalledWith(1);
            });
        });

        describe("Update", () => {
            it("Update and return a product", async () => {
                jest.spyOn(service, "update").mockResolvedValue(updatedProduct);

                expect(await controller.update(1, updatedProductDTO)).toBe(
                    updatedProduct,
                );
                expect(service.update).toHaveBeenCalledWith(
                    1,
                    updatedProductDTO,
                );
            });
        });

        describe("Remove", () => {
            it("Remove and return a product", async () => {
                jest.spyOn(service, "remove").mockResolvedValue(createdProduct);

                expect(await controller.remove(1)).toBe(createdProduct);
                expect(service.remove).toHaveBeenCalledWith(1);
            });
        });

        describe("Search", () => {
            it("Search by keyword and language with pagination, return a list of Product ID", async () => {
                const searchDto: ProductSearchDTO = {
                    keyword: "Test",
                    languageId: null,
                    currentPage: 1,
                    perPage: 3,
                };
                const searchResults = { productIds: [1, 2, 3] };
                jest.spyOn(service, "search").mockResolvedValue(searchResults);

                expect(await controller.search(searchDto)).toBe(searchResults);
                expect(service.search).toHaveBeenCalledWith(searchDto);
            });
        });
    });
});
