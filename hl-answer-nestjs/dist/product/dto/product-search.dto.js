"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearchDTO = void 0;
const class_validator_1 = require("class-validator");
const language_enum_1 = require("./language.enum");
const class_transformer_1 = require("class-transformer");
class ProductSearchDTO {
    constructor(keyword, languageId, currentPage, perPage) {
        this.keyword = keyword;
        this.languageId = languageId;
        this.currentPage = currentPage;
        this.perPage = perPage;
    }
}
exports.ProductSearchDTO = ProductSearchDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductSearchDTO.prototype, "keyword", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => ("" + value).toLowerCase()),
    (0, class_validator_1.IsEnum)(language_enum_1.LanguageCode),
    __metadata("design:type", String)
], ProductSearchDTO.prototype, "languageId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ProductSearchDTO.prototype, "currentPage", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(20),
    __metadata("design:type", Number)
], ProductSearchDTO.prototype, "perPage", void 0);
//# sourceMappingURL=product-search.dto.js.map