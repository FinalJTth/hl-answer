import {
    ArrayMinSize,
    IsArray,
    IsEnum,
    IsNumber,
    IsOptional,
    ValidateNested,
} from "class-validator";
import { ProductDetailTranslationDTO } from "./product-detail-translation.dto";
import { LanguageCode } from "./language.enum";
import { Transform } from "class-transformer";

export class ProductDTO {
    @IsOptional()
    @IsNumber()
    id: number;

    @Transform(({ value }) => ("" + value).toLowerCase())
    @IsEnum(LanguageCode)
    originalLanguage: LanguageCode;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    productDetailTranslations: Array<ProductDetailTranslationDTO>;

    constructor(
        originalLanguage: LanguageCode,
        productDetailTranslations: Array<ProductDetailTranslationDTO>,
    ) {
        this.originalLanguage = originalLanguage;
        this.productDetailTranslations = productDetailTranslations;
    }
}
