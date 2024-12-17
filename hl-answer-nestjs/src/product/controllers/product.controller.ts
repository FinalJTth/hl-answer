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

@Controller("product")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get(":id")
    find(@Param("id") id: number) {
        return this.productService.find(id);
    }

    @Post()
    create(@Body() dto: ProductDTO) {
        return this.productService.create(dto);
    }

    @Patch(":id")
    update(@Param("id") id: number, @Body() dto: ProductDTO) {
        return this.productService.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.productService.remove(id);
    }
}
