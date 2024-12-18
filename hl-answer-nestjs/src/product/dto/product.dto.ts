import {
    ArrayMinSize,
    IsArray,
    IsEnum,
    IsInt,
    IsOptional,
    ValidateNested,
} from "class-validator";
import { ProductDetailTranslationDTO } from "./product-detail-translation.dto";
import { LanguageCode } from "./language.enum";
import { Transform, Type } from "class-transformer";

export class ProductDTO {
    @IsOptional()
    @IsInt()
    id?: number;

    @Transform(({ value }) => ("" + value).toLowerCase())
    @IsEnum(LanguageCode)
    originalLanguageId: LanguageCode;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductDetailTranslationDTO)
    @ArrayMinSize(1)
    productDetailTranslations: Array<ProductDetailTranslationDTO>;

    constructor(
        originalLanguageId: LanguageCode,
        productDetailTranslations: Array<ProductDetailTranslationDTO>,
    ) {
        this.originalLanguageId = originalLanguageId;
        this.productDetailTranslations = productDetailTranslations;
    }
}
