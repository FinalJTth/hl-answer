import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { LanguageCode } from "./language.enum";

export class ProductDetailTranslationDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @Transform(({ value }) => ("" + value).toLowerCase())
    @IsEnum(LanguageCode)
    languageId: LanguageCode;

    constructor(name: string, description: string, languageId: LanguageCode) {
        this.name = name;
        this.description = description;
        this.languageId = languageId;
    }
}
