-- DropForeignKey
ALTER TABLE "productDetailTranslations" DROP CONSTRAINT "productDetailTranslations_productId_fkey";

-- AddForeignKey
ALTER TABLE "productDetailTranslations" ADD CONSTRAINT "productDetailTranslations_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
