import { ProductDetailTranslationDTO } from "./product-detail-translation.dto";
import { LanguageCode } from "./language.enum";
export declare class ProductDTO {
    id?: number;
    originalLanguageId: LanguageCode;
    productDetailTranslations: Array<ProductDetailTranslationDTO>;
    constructor(originalLanguageId: LanguageCode, productDetailTranslations: Array<ProductDetailTranslationDTO>);
}
