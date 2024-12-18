"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search10 = exports.search9 = exports.search8 = exports.search7 = exports.search6 = exports.search5 = exports.search4 = exports.search3 = exports.search2 = exports.search1 = exports.laptop1 = exports.laptopTh1 = exports.laptopIt1 = exports.laptopDe1 = exports.laptopFr1 = exports.laptopEs1 = exports.laptopEn1 = exports.refrigerator3 = exports.refrigeratorTh3 = exports.refrigeratorIt3 = exports.refrigeratorDe3 = exports.refrigeratorFr3 = exports.refrigeratorEs3 = exports.refrigeratorEn3 = exports.refrigerator2 = exports.refrigeratorTh2 = exports.refrigeratorIt2 = exports.refrigeratorDe2 = exports.refrigeratorFr2 = exports.refrigeratorEs2 = exports.refrigeratorEn2 = exports.refrigerator1 = exports.refrigeratorTh1 = exports.refrigeratorIt1 = exports.refrigeratorDe1 = exports.refrigeratorFr1 = exports.refrigeratorEs1 = exports.refrigeratorEn1 = exports.testProductDTO3 = exports.testProductDTO2 = exports.testProductDTO1 = exports.testProductDetailDTO6 = exports.testProductDetailDTO5 = exports.testProductDetailDTO4 = exports.testProductDetailDTO3 = exports.testProductDetailDTO2 = exports.testProductDetailDTO1 = void 0;
const dto_1 = require("../dto");
const product_search_dto_1 = require("../dto/product-search.dto");
exports.testProductDetailDTO1 = new dto_1.ProductDetailTranslationDTO("Test", "This is a test product.", dto_1.LanguageCode.English);
exports.testProductDetailDTO2 = new dto_1.ProductDetailTranslationDTO("Prueba", "Este es un producto de prueba.", dto_1.LanguageCode.Spanish);
exports.testProductDetailDTO3 = new dto_1.ProductDetailTranslationDTO("Test replace", "This is a test replacement.", dto_1.LanguageCode.English);
exports.testProductDetailDTO4 = new dto_1.ProductDetailTranslationDTO("Reemplazo de prueba", "Este es un reemplazo de prueba.", dto_1.LanguageCode.Spanish);
exports.testProductDetailDTO5 = new dto_1.ProductDetailTranslationDTO("Testez de nouveaux détails", "Ceci est un test pour de nouveaux détails par PATCH.", dto_1.LanguageCode.French);
exports.testProductDetailDTO6 = new dto_1.ProductDetailTranslationDTO("Duplication des tests", "Il s'agit d'un test de traduction en double sur le même DTO.", dto_1.LanguageCode.French);
exports.testProductDTO1 = new dto_1.ProductDTO(dto_1.LanguageCode.English, [
    exports.testProductDetailDTO1,
    exports.testProductDetailDTO2,
]);
exports.testProductDTO2 = new dto_1.ProductDTO(dto_1.LanguageCode.English, [
    exports.testProductDetailDTO3,
    exports.testProductDetailDTO4,
    exports.testProductDetailDTO5,
]);
exports.testProductDTO3 = new dto_1.ProductDTO(dto_1.LanguageCode.French, [
    exports.testProductDetailDTO5,
    exports.testProductDetailDTO6,
]);
exports.refrigeratorEn1 = new dto_1.ProductDetailTranslationDTO("Samsung Refrigerator 2 Doors 14.6 Q (415 L) RT42CB664412ST", "With this cutting edge technology, you can ensure that your food stay fresh with efficiency beyond your expectation.", dto_1.LanguageCode.English);
exports.refrigeratorEs1 = new dto_1.ProductDetailTranslationDTO("Frigorífico Samsung 2 Puertas 14.6 Q (415 L) RT42CB664412ST", "With this cutting edge technology, you can ensure that your food stay fresh with efficiency beyond your expectation.", dto_1.LanguageCode.Spanish);
exports.refrigeratorFr1 = new dto_1.ProductDetailTranslationDTO("Réfrigérateur Samsung 2 portes 14.6 Q (415 L) RT42CB664412ST", "Grâce à cette technologie de pointe, vous pouvez garantir que vos aliments restent frais avec une efficacité au-delà de vos attentes.", dto_1.LanguageCode.French);
exports.refrigeratorDe1 = new dto_1.ProductDetailTranslationDTO("Samsung Kühlschrank 2 Türen 14.6 Q (415 L) RT42CB664412ST", "Mit dieser Spitzentechnologie können Sie sicherstellen, dass Ihre Lebensmittel mit einer Effizienz, die Ihre Erwartungen übertrifft, frisch bleiben.", dto_1.LanguageCode.German);
exports.refrigeratorIt1 = new dto_1.ProductDetailTranslationDTO("Samsung Frigorifero 2 Porte 14.6 Q (415 L) RT42CB664412ST", "Con questa tecnologia all'avanguardia, puoi garantire che il tuo cibo rimanga fresco con un'efficienza superiore alle tue aspettative.", dto_1.LanguageCode.Italian);
exports.refrigeratorTh1 = new dto_1.ProductDetailTranslationDTO("ตู้เย็น Samsung 2 ประตู 14.6 Q (415 L) รุ่น RT42CB664412ST", "ด้วยเทคโนโลยีล้ำสมัยนี้ คุณสามารถมั่นใจได้ว่าอาหารของคุณคงความสดและมีประสิทธิภาพเกินความคาดหมาย", dto_1.LanguageCode.Thai);
exports.refrigerator1 = new dto_1.ProductDTO(dto_1.LanguageCode.English, [
    exports.refrigeratorEn1,
    exports.refrigeratorEs1,
    exports.refrigeratorFr1,
    exports.refrigeratorDe1,
    exports.refrigeratorIt1,
    exports.refrigeratorTh1,
]);
exports.refrigeratorEn2 = new dto_1.ProductDetailTranslationDTO("LG Refrigerator 4 Doors 22.4 Q (1201 L) GC-X257SFZW", "The freshness stay with your food as if it is just coming out of the farm and with DoorCooling technology, you can be sure that the this refrigerator gets cold longer and faster.", dto_1.LanguageCode.English);
exports.refrigeratorEs2 = new dto_1.ProductDetailTranslationDTO("Frigorífico LG 4 Puertas 22.4 Q (1201 L) GC-X257SFZW", "La frescura permanece con tus alimentos como si recién salieran de la granja y con la tecnología DoorCooling, puedes estar seguro de que este refrigerador se enfría por más tiempo y más rápido.", dto_1.LanguageCode.Spanish);
exports.refrigeratorFr2 = new dto_1.ProductDetailTranslationDTO("Réfrigérateur LG 4 portes 22.4 Q (1201 L) GC-X257SFZW", "La fraîcheur reste avec vos aliments comme s'ils sortaient tout juste de la ferme et grâce à la technologie DoorCooling, vous pouvez être sûr que ce réfrigérateur refroidit plus longtemps et plus rapidement.", dto_1.LanguageCode.French);
exports.refrigeratorDe2 = new dto_1.ProductDetailTranslationDTO("LG Kühlschrank 4 Türen 22.4 Q (1201 L) GC-X257SFZW", "Ihre Lebensmittel bleiben so frisch, als kämen sie gerade vom Bauernhof und dank der DoorCooling-Technologie können Sie sicher sein, dass dieser Kühlschrank länger und schneller kalt bleibt.", dto_1.LanguageCode.German);
exports.refrigeratorIt2 = new dto_1.ProductDetailTranslationDTO("LG Frigorifero 4 Porte 22.4 Q (1201 L) GC-X257SFZW", "La freschezza dei tuoi alimenti resta inalterata come se fossero appena usciti dalla fattoria e, grazie alla tecnologia DoorCooling, puoi essere certo che il frigorifero raffredderà più a lungo e più velocemente.", dto_1.LanguageCode.Italian);
exports.refrigeratorTh2 = new dto_1.ProductDetailTranslationDTO("ตู้เย็น LG 4 ประตู 22.4 Q (1201 L) รุ่น GC-X257SFZW", "ความสดใหม่คงอยู่กับอาหารของคุณราวกับว่าเพิ่งออกมาจากฟาร์ม และด้วยเทคโนโลยี DoorCooling คุณจึงมั่นใจได้ว่าตู้เย็นนี้จะเย็นนานขึ้นและเร็วขึ้น", dto_1.LanguageCode.Thai);
exports.refrigerator2 = new dto_1.ProductDTO(dto_1.LanguageCode.English, [
    exports.refrigeratorEn2,
    exports.refrigeratorEs2,
    exports.refrigeratorFr2,
    exports.refrigeratorDe2,
    exports.refrigeratorIt2,
    exports.refrigeratorTh2,
]);
exports.refrigeratorEn3 = new dto_1.ProductDetailTranslationDTO("Toshiba Refrigerator 2 Doors 6.4 Q (343 L) GC-X257SFZW", "Super Direct Cool system delivers cool air directly to the refrigerator compartment through the cold air vents in the freezer compartment. The door rubber seal is designed to be easily removed for cleaning by hand. It closes tightly with a magnetic strip inside.", dto_1.LanguageCode.English);
exports.refrigeratorEs3 = new dto_1.ProductDetailTranslationDTO("Frigorífico Toshiba 2 Puertas 6.4 Q (343 L) GC-X257SFZW", "El sistema Super Direct Cool entrega aire frío directamente al compartimiento del refrigerador a través de las salidas de aire frío en el compartimiento del congelador. El sello de goma de la puerta está diseñado para quitarse fácilmente y limpiarlo a mano. Se cierra herméticamente con una banda magnética en su interior.", dto_1.LanguageCode.Spanish);
exports.refrigeratorFr3 = new dto_1.ProductDetailTranslationDTO("Réfrigérateur Toshiba 2 portes 6.4 Q (343 L) GC-X257SFZW", "Le système Super Direct Cool fournit de l'air frais directement au compartiment réfrigérateur via les bouches d'air froid du compartiment congélateur. Le joint en caoutchouc de la porte est conçu pour être facilement retiré pour un nettoyage à la main. Il se ferme hermétiquement avec une bande magnétique à l'intérieur.", dto_1.LanguageCode.French);
exports.refrigeratorDe3 = new dto_1.ProductDetailTranslationDTO("Toshiba Kühlschrank 2 Türen 6.4 Q (343 L) GC-X257SFZW", "Das Super Direct Cool-System liefert kühle Luft durch die Kaltluftöffnungen im Gefrierfach direkt in den Kühlraum. Die Gummidichtung der Tür ist so konzipiert, dass sie zur Reinigung per Hand leicht entfernt werden kann. Es schließt fest mit einem Magnetstreifen im Inneren.", dto_1.LanguageCode.German);
exports.refrigeratorIt3 = new dto_1.ProductDetailTranslationDTO("Toshiba Frigorifero 2 Porte 6.4 Q (343 L) GC-X257SFZW", "Il sistema Super Direct Cool fornisce aria fresca direttamente allo scomparto frigorifero attraverso le bocchette dell'aria fredda nello scomparto congelatore. La guarnizione in gomma della porta è progettata per essere facilmente rimossa per la pulizia manuale. Si chiude ermeticamente con una striscia magnetica all'interno.", dto_1.LanguageCode.Italian);
exports.refrigeratorTh3 = new dto_1.ProductDetailTranslationDTO("ตู้เย็น Toshiba 2 ประตู 6.4 Q (343 L) รุ่น GC-X257SFZW", "ระบบส่งตรงความเย็น Super Direct Cool ส่งตรงความ เย็นสู่ช่องแช่เย็นผ่านช่องส่งลมเย็นในช่องแช่แข็ง ขอบยางประตู ออกแบบให้ถอดทำความสะอาดด้วยมือเปล่า ปิดแน่นสนิท ด้วยแถบแม่เหล็กภายใน", dto_1.LanguageCode.Thai);
exports.refrigerator3 = new dto_1.ProductDTO(dto_1.LanguageCode.Thai, [
    exports.refrigeratorEn3,
    exports.refrigeratorEs3,
    exports.refrigeratorFr3,
    exports.refrigeratorDe3,
    exports.refrigeratorIt3,
    exports.refrigeratorTh3,
]);
exports.laptopEn1 = new dto_1.ProductDetailTranslationDTO("Surface Pro 11/X Plus/16GB/256GB /Platinum/Windows 11Home+Surface Keyboard with slim pen", "Your all in one laptop with peak performance included with AI technology to help you with any task that you need. Elevate your work flow with new powerful and cool Snapdragon X Series CPU and flexible design, for you to work and adjust anywhere.", dto_1.LanguageCode.English);
exports.laptopEs1 = new dto_1.ProductDetailTranslationDTO("Surface Pro 11/X Plus/16 GB/256 GB/Platinum/Windows 11Home+Teclado Surface con lápiz delgado", "Tu portátil todo en uno con máximo rendimiento incluido con tecnología de IA para ayudarte con cualquier tarea que necesites. Mejora tu flujo de trabajo con la nueva y potente CPU Snapdragon X Series y un diseño flexible para que puedas trabajar y adaptarte en cualquier lugar.", dto_1.LanguageCode.Spanish);
exports.laptopFr1 = new dto_1.ProductDetailTranslationDTO("Surface Pro 11/X Plus/16 Go/256 Go/Platinum/Windows 11Home+Clavier Surface avec stylet fin", "Votre ordinateur portable tout-en-un avec des performances de pointe et une technologie d'IA pour vous aider dans toutes les tâches dont vous avez besoin. Améliorez votre flux de travail avec le nouveau processeur Snapdragon X Series puissant et cool et une conception flexible, pour que vous puissiez travailler et vous adapter n'importe où.", dto_1.LanguageCode.French);
exports.laptopDe1 = new dto_1.ProductDetailTranslationDTO("Surface Pro 11/X Plus/16 GB/256 GB/Platinum/Windows 11Home+Surface-Tastatur mit schmalem Stift", "Ihr All-in-One-Laptop mit Spitzenleistung und KI-Technologie unterstützt Sie bei allen anfallenden Aufgaben. Verbessern Sie Ihren Arbeitsablauf mit der neuen leistungsstarken und coolen Snapdragon X Series-CPU und dem flexiblen Design, damit Sie überall arbeiten und Anpassungen vornehmen können.", dto_1.LanguageCode.German);
exports.laptopIt1 = new dto_1.ProductDetailTranslationDTO("Surface Pro 11/X Plus/16 GB/256 GB/Platinum/Windows 11Home+Surface Keyboard con penna sottile", "Il tuo laptop all in one con prestazioni di picco incluse con tecnologia AI per aiutarti con qualsiasi attività di cui hai bisogno. Migliora il tuo flusso di lavoro con la nuova potente e fantastica CPU Snapdragon X Series e il design flessibile, per lavorare e adattarti ovunque.", dto_1.LanguageCode.Italian);
exports.laptopTh1 = new dto_1.ProductDetailTranslationDTO("Surface Pro 11/X Plus/16GB/256GB /Platinum/Windows 11Home+แป้นพิมพ์ Surface พร้อมปากกาขนาดบาง", "แล็ปท็อปออลอินวันพร้อมประสิทธิภาพสูงสุดพร้อมเทคโนโลยี AI ที่ช่วยให้คุณทำงานที่ต้องการได้ทุกอย่าง ยกระดับการทำงานของคุณด้วย CPU Snapdragon X Series ที่ทรงพลังและยอดเยี่ยมพร้อมดีไซน์ที่ยืดหยุ่น เพื่อให้คุณทำงานและปรับเปลี่ยนได้ทุกที่", dto_1.LanguageCode.Thai);
exports.laptop1 = new dto_1.ProductDTO(dto_1.LanguageCode.Thai, [
    exports.laptopEn1,
    exports.laptopEs1,
    exports.laptopFr1,
    exports.laptopDe1,
    exports.laptopIt1,
    exports.laptopTh1,
]);
exports.search1 = new product_search_dto_1.ProductSearchDTO("refrigerator", null, 1, 1);
exports.search2 = new product_search_dto_1.ProductSearchDTO("frigorífico", null, 2, 1);
exports.search3 = new product_search_dto_1.ProductSearchDTO("réfrigérateur", null, 3, 1);
exports.search4 = new product_search_dto_1.ProductSearchDTO("kühlschrank", null, 1, 2);
exports.search5 = new product_search_dto_1.ProductSearchDTO("frigorifero", null, 2, 2);
exports.search6 = new product_search_dto_1.ProductSearchDTO("ตู้เย็น", null, 1, 10);
exports.search7 = new product_search_dto_1.ProductSearchDTO("refrigerator", null, 10, 10);
exports.search8 = new product_search_dto_1.ProductSearchDTO("laptop", dto_1.LanguageCode.English, 1, 10);
exports.search9 = new product_search_dto_1.ProductSearchDTO("cool", dto_1.LanguageCode.English, 1, 10);
exports.search10 = new product_search_dto_1.ProductSearchDTO("cool", null, 1, 10);
//# sourceMappingURL=product.service.spec.class.js.map