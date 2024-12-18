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
exports.ProductDTO = void 0;
const class_validator_1 = require("class-validator");
const product_detail_translation_dto_1 = require("./product-detail-translation.dto");
const language_enum_1 = require("./language.enum");
const class_transformer_1 = require("class-transformer");
class ProductDTO {
    constructor(originalLanguageId, productDetailTranslations) {
        this.originalLanguageId = originalLanguageId;
        this.productDetailTranslations = productDetailTranslations;
    }
}
exports.ProductDTO = ProductDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => ("" + value).toLowerCase()),
    (0, class_validator_1.IsEnum)(language_enum_1.LanguageCode),
    __metadata("design:type", String)
], ProductDTO.prototype, "originalLanguageId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => product_detail_translation_dto_1.ProductDetailTranslationDTO),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], ProductDTO.prototype, "productDetailTranslations", void 0);
//# sourceMappingURL=product.dto.js.map