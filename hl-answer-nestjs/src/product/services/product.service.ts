import { Injectable } from "@nestjs/common";
import { ProductDTO } from "../dto";
import { DatabaseService } from "../../database/services/database.service";

@Injectable()
export class ProductService {
    constructor(private databaseService: DatabaseService) {}

    find(id: number) {
        return this.productService.find(id);
    }

    create(dto: ProductDTO) {
        return this.productService.create(dto);
    }

    update(id: number, @Body() dto: ProductDTO) {
        return this.productService.update(id, dto);
    }

    remove(id: number) {
        return this.productService.remove(id);
    }
}
