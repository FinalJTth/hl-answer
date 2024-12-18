import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { LanguageCode } from "./language.enum";
import { Transform } from "class-transformer";

export class ProductSearchDTO {
    @IsString()
    keyword: string;

    @IsOptional()
    @Transform(({ value }) => ("" + value).toLowerCase())
    @IsEnum(LanguageCode)
    languageId?: LanguageCode;

    @IsInt()
    @Min(0)
    currentPage: number;

    @IsInt()
    @Min(0)
    @Max(20)
    perPage: number;

    constructor(
        keyword: string,
        languageId: LanguageCode,
        currentPage: number,
        perPage: number,
    ) {
        this.keyword = keyword;
        this.languageId = languageId;
        this.currentPage = currentPage;
        this.perPage = perPage;
    }
}
