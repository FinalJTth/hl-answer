import { LanguageCode } from "./language.enum";
export declare class ProductSearchDTO {
    keyword: string;
    languageId?: LanguageCode;
    currentPage: number;
    perPage: number;
    constructor(keyword: string, languageId: LanguageCode, currentPage: number, perPage: number);
}
