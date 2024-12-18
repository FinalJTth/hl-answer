import { ProductService } from "../services/product.service";
import { ProductDTO } from "../dto";
import { ProductSearchDTO } from "../dto/product-search.dto";
import { Product } from "@prisma/client";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    find(id: number): Promise<Product>;
    create(dto: ProductDTO): Promise<Product>;
    update(id: number, dto: ProductDTO): Promise<Product>;
    remove(id: number): Promise<Product>;
    search(dto: ProductSearchDTO): Promise<Record<string, Array<number>>>;
}
