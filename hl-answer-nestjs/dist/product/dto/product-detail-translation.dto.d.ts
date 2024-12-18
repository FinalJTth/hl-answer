import { LanguageCode } from "./language.enum";
export declare class ProductDetailTranslationDTO {
    name: string;
    description: string;
    languageId: LanguageCode;
    constructor(name: string, description: string, languageId: LanguageCode);
}
