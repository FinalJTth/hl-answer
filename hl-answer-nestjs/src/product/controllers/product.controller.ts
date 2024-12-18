import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { ProductService } from "../services/product.service";
import { ProductDTO } from "../dto";
import { ProductSearchDTO } from "../dto/product-search.dto";
import { Product } from "@prisma/client";

@Controller("product")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get(":id")
    find(@Param("id") id: number): Promise<Product> {
        return this.productService.find(id);
    }

    @Post()
    create(@Body() dto: ProductDTO): Promise<Product> {
        return this.productService.create(dto);
    }

    @Patch(":id")
    update(@Param("id") id: number, @Body() dto: ProductDTO): Promise<Product> {
        return this.productService.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id") id: number): Promise<Product> {
        return this.productService.remove(id);
    }

    @Post("search")
    search(
        @Body() dto: ProductSearchDTO,
    ): Promise<Record<string, Array<number>>> {
        return this.productService.search(dto);
    }
}
