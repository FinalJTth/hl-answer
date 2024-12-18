import { ProductDTO } from "../dto";
import { DatabaseService } from "../../database/services/database.service";
import { ProductSearchDTO } from "../dto/product-search.dto";
export declare class ProductService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<({
        productDetailTranslations: {
            name: string;
            id: number;
            description: string;
            languageId: string;
            productId: number;
        }[];
    } & {
        id: number;
        originalLanguageId: string;
    })[]>;
    find(id: number): Promise<{
        productDetailTranslations: {
            name: string;
            id: number;
            description: string;
            languageId: string;
            productId: number;
        }[];
    } & {
        id: number;
        originalLanguageId: string;
    }>;
    create(dto: ProductDTO): Promise<{
        productDetailTranslations: {
            name: string;
            description: string;
            languageId: string;
        }[];
    } & {
        id: number;
        originalLanguageId: string;
    }>;
    update(id: number, dto: ProductDTO): Promise<{
        productDetailTranslations: {
            name: string;
            id: number;
            description: string;
            languageId: string;
            productId: number;
        }[];
    } & {
        id: number;
        originalLanguageId: string;
    }>;
    remove(id: number): Promise<{
        productDetailTranslations: {
            name: string;
            id: number;
            description: string;
            languageId: string;
            productId: number;
        }[];
    } & {
        id: number;
        originalLanguageId: string;
    }>;
    search(dto: ProductSearchDTO): Promise<{
        productIds: any[];
    }>;
}
