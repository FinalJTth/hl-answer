import { Test, TestingModule } from "@nestjs/testing";
import { ProductService } from "./product.service";
import { ConfigService } from "@nestjs/config";
import { DatabaseService } from "../../database/services/database.service";
import { LanguageCode } from "../dto";
import { ForbiddenException, NotFoundException } from "@nestjs/common";
import { ProductSearchDTO } from "../dto/product-search.dto";
import {
    laptop1,
    refrigerator1,
    refrigerator2,
    refrigerator3,
    search1,
    search10,
    search2,
    search3,
    search4,
    search5,
    search6,
    search7,
    search8,
    search9,
    testProductDTO1,
    testProductDTO2,
    testProductDTO3,
} from "./product.service.spec.class";

describe("Product Service", () => {
    let service: ProductService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductService, ConfigService, DatabaseService],
        }).compile();

        service = module.get<ProductService>(ProductService);
    });

    let testProductId: number;

    /* CRUD Test */

    describe("CRUD Test", () => {
        it("Create", async () => {
            const testProduct = await service.create(testProductDTO1);
            testProductId = testProduct.id;

            expect(testProduct).toMatchObject(testProductDTO1);
        });

        it("Read", async () => {
            const testProduct = await service.find(testProductId);
            const testProducts = await service.findAll();

            expect(testProduct).toMatchObject(testProductDTO1);
            expect(testProducts).toBeInstanceOf(Array);
            expect(testProducts).toHaveLength(1);
            expect(testProducts).toContainEqual(testProduct);
        });

        it("Update", async () => {
            const testProduct = await service.update(
                testProductId,
                testProductDTO2,
            );

            expect(testProduct).toMatchObject(testProductDTO2);
        });

        it("Delete", async () => {
            const testProduct = await service.remove(testProductId);

            expect(testProduct).toMatchObject(testProductDTO2);
        });
    });

    /* Validation Test */

    describe("Validation Test : CRUD", () => {
        // Read or update non-exist product
        it("Read or update non-exist product", async () => {
            expect(service.find(1)).rejects.toThrow(NotFoundException);
            expect(service.update(1, testProductDTO1)).rejects.toThrow(
                NotFoundException,
            );
        });

        // Duplicate ProductDetailTranslationDTO language onthe same product
        it("Duplicate ProductDetailTranslationDTO language onthe same product", async () => {
            const product = await service.create(testProductDTO1);

            expect(service.create(testProductDTO3)).rejects.toThrow(
                ForbiddenException,
            );

            await new Promise(process.nextTick);

            expect(service.update(product.id, testProductDTO3)).rejects.toThrow(
                ForbiddenException,
            );

            await service.remove(product.id);
        });
    });

    /* Validation Test : Search function */

    describe("Validation Test : Search function", () => {
        it("Search function return type", async () => {
            const searchDTO = new ProductSearchDTO(
                "test",
                LanguageCode.English,
                1,
                10,
            );

            // Check return type if it's an array
            expect((await service.search(searchDTO)).productIds).toBeInstanceOf(
                Array,
            );

            // Search with empty database, must return empty array
            expect((await service.search(searchDTO)).productIds).toHaveLength(
                0,
            );
        });

        it("Search function result", async () => {
            const searchDTO = new ProductSearchDTO(
                "test",
                LanguageCode.English,
                1,
                10,
            );

            // Check return type if it's an array
            expect((await service.search(searchDTO)).productIds).toBeInstanceOf(
                Array,
            );

            // Search with empty database, must return empty array
            expect((await service.search(searchDTO)).productIds).toHaveLength(
                0,
            );

            const r1 = await service.create(refrigerator1);
            const r2 = await service.create(refrigerator2);
            const r3 = await service.create(refrigerator3);
            const l1 = await service.create(laptop1);

            // There should be 3 refrigerator and 1 laptop overall

            /* 
                Language and pagination search
    
                Note that "any language" uses substring search instead of
                "textSearch" TSVECTOR. full word search.
            */

            // Search "refrigerator", page 1, take 1, any language
            expect((await service.search(search1)).productIds).toHaveLength(1);
            // Search "frigorífico", page 2, take 1, any language
            expect((await service.search(search2)).productIds).toHaveLength(1);
            // Search "réfrigérateur", page 3, take 1, any language
            expect((await service.search(search3)).productIds).toHaveLength(1);

            // Search "kühlschrank", page 1, take 2, any language
            expect((await service.search(search4)).productIds).toHaveLength(2);
            // Search "frigorifero", page 2, take 2, any language
            expect((await service.search(search5)).productIds).toHaveLength(1);

            // Search "ตู้เย็น", page 10, take 10, any language
            expect((await service.search(search6)).productIds).toHaveLength(3);
            // Search "refrigerator", page 10, take 10, any language
            expect((await service.search(search7)).productIds).toHaveLength(0);
            // Search "laptop", page 1, take 10, english language
            expect((await service.search(search8)).productIds).toHaveLength(1);

            /* 
                Search "cool", page 1, take 10, english language.
    
                The result must contain the last refrigerator and the laptop
                This is due to full word search on "textSearch" TSVECTOR.
                The refrigerator number 2 has a substring "cool" but doesn't count
                because this is not a substring search, but a full word one.
            */
            expect((await service.search(search9)).productIds).toHaveLength(2);
            expect((await service.search(search9)).productIds).toContainEqual(
                r3.id,
            );
            expect((await service.search(search9)).productIds).toContainEqual(
                l1.id,
            );

            /* 
                Search "cool", page 1, take 10, any language.
    
                The result must contain the last "2" refrigerator and the laptop
                This is a substring search so refrigerator number 2 counts.
            */
            expect((await service.search(search10)).productIds).toHaveLength(3);
            expect((await service.search(search10)).productIds).toContainEqual(
                r2.id,
            );
            expect((await service.search(search10)).productIds).toContainEqual(
                r3.id,
            );
            expect((await service.search(search10)).productIds).toContainEqual(
                l1.id,
            );

            await service.remove(r1.id);
            await service.remove(r2.id);
            await service.remove(r3.id);
            await service.remove(l1.id);
        });
    });
});
