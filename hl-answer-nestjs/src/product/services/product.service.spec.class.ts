import { ProductDetailTranslationDTO, LanguageCode, ProductDTO } from "../dto";
import { ProductSearchDTO } from "../dto/product-search.dto";

/* CRUD and Validation test */
export const testProductDetailDTO1 = new ProductDetailTranslationDTO(
    "Test",
    "This is a test product.",
    LanguageCode.English,
);

export const testProductDetailDTO2 = new ProductDetailTranslationDTO(
    "Prueba",
    "Este es un producto de prueba.",
    LanguageCode.Spanish,
);

export const testProductDetailDTO3 = new ProductDetailTranslationDTO(
    "Test replace",
    "This is a test replacement.",
    LanguageCode.English,
);

export const testProductDetailDTO4 = new ProductDetailTranslationDTO(
    "Reemplazo de prueba",
    "Este es un reemplazo de prueba.",
    LanguageCode.Spanish,
);

export const testProductDetailDTO5 = new ProductDetailTranslationDTO(
    "Testez de nouveaux détails",
    "Ceci est un test pour de nouveaux détails par PATCH.",
    LanguageCode.French,
);

export const testProductDetailDTO6 = new ProductDetailTranslationDTO(
    "Duplication des tests",
    "Il s'agit d'un test de traduction en double sur le même DTO.",
    LanguageCode.French,
);

export const testProductDTO1 = new ProductDTO(LanguageCode.English, [
    testProductDetailDTO1,
    testProductDetailDTO2,
]);

export const testProductDTO2 = new ProductDTO(LanguageCode.English, [
    testProductDetailDTO3,
    testProductDetailDTO4,
    testProductDetailDTO5,
]);

export const testProductDTO3 = new ProductDTO(LanguageCode.French, [
    testProductDetailDTO5,
    testProductDetailDTO6,
]);

/* Validation test : Search function */

// Refrigerator 1

export const refrigeratorEn1 = new ProductDetailTranslationDTO(
    "Samsung Refrigerator 2 Doors 14.6 Q (415 L) RT42CB664412ST",
    "With this cutting edge technology, you can ensure that your food stay fresh with efficiency beyond your expectation.",
    LanguageCode.English,
);

export const refrigeratorEs1 = new ProductDetailTranslationDTO(
    "Frigorífico Samsung 2 Puertas 14.6 Q (415 L) RT42CB664412ST",
    "With this cutting edge technology, you can ensure that your food stay fresh with efficiency beyond your expectation.",
    LanguageCode.Spanish,
);

export const refrigeratorFr1 = new ProductDetailTranslationDTO(
    "Réfrigérateur Samsung 2 portes 14.6 Q (415 L) RT42CB664412ST",
    "Grâce à cette technologie de pointe, vous pouvez garantir que vos aliments restent frais avec une efficacité au-delà de vos attentes.",
    LanguageCode.French,
);

export const refrigeratorDe1 = new ProductDetailTranslationDTO(
    "Samsung Kühlschrank 2 Türen 14.6 Q (415 L) RT42CB664412ST",
    "Mit dieser Spitzentechnologie können Sie sicherstellen, dass Ihre Lebensmittel mit einer Effizienz, die Ihre Erwartungen übertrifft, frisch bleiben.",
    LanguageCode.German,
);

export const refrigeratorIt1 = new ProductDetailTranslationDTO(
    "Samsung Frigorifero 2 Porte 14.6 Q (415 L) RT42CB664412ST",
    "Con questa tecnologia all'avanguardia, puoi garantire che il tuo cibo rimanga fresco con un'efficienza superiore alle tue aspettative.",
    LanguageCode.Italian,
);

export const refrigeratorTh1 = new ProductDetailTranslationDTO(
    "ตู้เย็น Samsung 2 ประตู 14.6 Q (415 L) รุ่น RT42CB664412ST",
    "ด้วยเทคโนโลยีล้ำสมัยนี้ คุณสามารถมั่นใจได้ว่าอาหารของคุณคงความสดและมีประสิทธิภาพเกินความคาดหมาย",
    LanguageCode.Thai,
);

export const refrigerator1 = new ProductDTO(LanguageCode.English, [
    refrigeratorEn1,
    refrigeratorEs1,
    refrigeratorFr1,
    refrigeratorDe1,
    refrigeratorIt1,
    refrigeratorTh1,
]);

// Refrigerator 2

export const refrigeratorEn2 = new ProductDetailTranslationDTO(
    "LG Refrigerator 4 Doors 22.4 Q (1201 L) GC-X257SFZW",
    "The freshness stay with your food as if it is just coming out of the farm and with DoorCooling technology, you can be sure that the this refrigerator gets cold longer and faster.",
    LanguageCode.English,
);

export const refrigeratorEs2 = new ProductDetailTranslationDTO(
    "Frigorífico LG 4 Puertas 22.4 Q (1201 L) GC-X257SFZW",
    "La frescura permanece con tus alimentos como si recién salieran de la granja y con la tecnología DoorCooling, puedes estar seguro de que este refrigerador se enfría por más tiempo y más rápido.",
    LanguageCode.Spanish,
);

export const refrigeratorFr2 = new ProductDetailTranslationDTO(
    "Réfrigérateur LG 4 portes 22.4 Q (1201 L) GC-X257SFZW",
    "La fraîcheur reste avec vos aliments comme s'ils sortaient tout juste de la ferme et grâce à la technologie DoorCooling, vous pouvez être sûr que ce réfrigérateur refroidit plus longtemps et plus rapidement.",
    LanguageCode.French,
);

export const refrigeratorDe2 = new ProductDetailTranslationDTO(
    "LG Kühlschrank 4 Türen 22.4 Q (1201 L) GC-X257SFZW",
    "Ihre Lebensmittel bleiben so frisch, als kämen sie gerade vom Bauernhof und dank der DoorCooling-Technologie können Sie sicher sein, dass dieser Kühlschrank länger und schneller kalt bleibt.",
    LanguageCode.German,
);

export const refrigeratorIt2 = new ProductDetailTranslationDTO(
    "LG Frigorifero 4 Porte 22.4 Q (1201 L) GC-X257SFZW",
    "La freschezza dei tuoi alimenti resta inalterata come se fossero appena usciti dalla fattoria e, grazie alla tecnologia DoorCooling, puoi essere certo che il frigorifero raffredderà più a lungo e più velocemente.",
    LanguageCode.Italian,
);

export const refrigeratorTh2 = new ProductDetailTranslationDTO(
    "ตู้เย็น LG 4 ประตู 22.4 Q (1201 L) รุ่น GC-X257SFZW",
    "ความสดใหม่คงอยู่กับอาหารของคุณราวกับว่าเพิ่งออกมาจากฟาร์ม และด้วยเทคโนโลยี DoorCooling คุณจึงมั่นใจได้ว่าตู้เย็นนี้จะเย็นนานขึ้นและเร็วขึ้น",
    LanguageCode.Thai,
);

export const refrigerator2 = new ProductDTO(LanguageCode.English, [
    refrigeratorEn2,
    refrigeratorEs2,
    refrigeratorFr2,
    refrigeratorDe2,
    refrigeratorIt2,
    refrigeratorTh2,
]);

// Refrigerator 3

export const refrigeratorEn3 = new ProductDetailTranslationDTO(
    "Toshiba Refrigerator 2 Doors 6.4 Q (343 L) GC-X257SFZW",
    "Super Direct Cool system delivers cool air directly to the refrigerator compartment through the cold air vents in the freezer compartment. The door rubber seal is designed to be easily removed for cleaning by hand. It closes tightly with a magnetic strip inside.",
    LanguageCode.English,
);

export const refrigeratorEs3 = new ProductDetailTranslationDTO(
    "Frigorífico Toshiba 2 Puertas 6.4 Q (343 L) GC-X257SFZW",
    "El sistema Super Direct Cool entrega aire frío directamente al compartimiento del refrigerador a través de las salidas de aire frío en el compartimiento del congelador. El sello de goma de la puerta está diseñado para quitarse fácilmente y limpiarlo a mano. Se cierra herméticamente con una banda magnética en su interior.",
    LanguageCode.Spanish,
);

export const refrigeratorFr3 = new ProductDetailTranslationDTO(
    "Réfrigérateur Toshiba 2 portes 6.4 Q (343 L) GC-X257SFZW",
    "Le système Super Direct Cool fournit de l'air frais directement au compartiment réfrigérateur via les bouches d'air froid du compartiment congélateur. Le joint en caoutchouc de la porte est conçu pour être facilement retiré pour un nettoyage à la main. Il se ferme hermétiquement avec une bande magnétique à l'intérieur.",
    LanguageCode.French,
);

export const refrigeratorDe3 = new ProductDetailTranslationDTO(
    "Toshiba Kühlschrank 2 Türen 6.4 Q (343 L) GC-X257SFZW",
    "Das Super Direct Cool-System liefert kühle Luft durch die Kaltluftöffnungen im Gefrierfach direkt in den Kühlraum. Die Gummidichtung der Tür ist so konzipiert, dass sie zur Reinigung per Hand leicht entfernt werden kann. Es schließt fest mit einem Magnetstreifen im Inneren.",
    LanguageCode.German,
);

export const refrigeratorIt3 = new ProductDetailTranslationDTO(
    "Toshiba Frigorifero 2 Porte 6.4 Q (343 L) GC-X257SFZW",
    "Il sistema Super Direct Cool fornisce aria fresca direttamente allo scomparto frigorifero attraverso le bocchette dell'aria fredda nello scomparto congelatore. La guarnizione in gomma della porta è progettata per essere facilmente rimossa per la pulizia manuale. Si chiude ermeticamente con una striscia magnetica all'interno.",
    LanguageCode.Italian,
);

export const refrigeratorTh3 = new ProductDetailTranslationDTO(
    "ตู้เย็น Toshiba 2 ประตู 6.4 Q (343 L) รุ่น GC-X257SFZW",
    "ระบบส่งตรงความเย็น Super Direct Cool ส่งตรงความ เย็นสู่ช่องแช่เย็นผ่านช่องส่งลมเย็นในช่องแช่แข็ง ขอบยางประตู ออกแบบให้ถอดทำความสะอาดด้วยมือเปล่า ปิดแน่นสนิท ด้วยแถบแม่เหล็กภายใน",
    LanguageCode.Thai,
);

export const refrigerator3 = new ProductDTO(LanguageCode.Thai, [
    refrigeratorEn3,
    refrigeratorEs3,
    refrigeratorFr3,
    refrigeratorDe3,
    refrigeratorIt3,
    refrigeratorTh3,
]);

// Laptop 1

export const laptopEn1 = new ProductDetailTranslationDTO(
    "Surface Pro 11/X Plus/16GB/256GB /Platinum/Windows 11Home+Surface Keyboard with slim pen",
    "Your all in one laptop with peak performance included with AI technology to help you with any task that you need. Elevate your work flow with new powerful and cool Snapdragon X Series CPU and flexible design, for you to work and adjust anywhere.",
    LanguageCode.English,
);

export const laptopEs1 = new ProductDetailTranslationDTO(
    "Surface Pro 11/X Plus/16 GB/256 GB/Platinum/Windows 11Home+Teclado Surface con lápiz delgado",
    "Tu portátil todo en uno con máximo rendimiento incluido con tecnología de IA para ayudarte con cualquier tarea que necesites. Mejora tu flujo de trabajo con la nueva y potente CPU Snapdragon X Series y un diseño flexible para que puedas trabajar y adaptarte en cualquier lugar.",
    LanguageCode.Spanish,
);

export const laptopFr1 = new ProductDetailTranslationDTO(
    "Surface Pro 11/X Plus/16 Go/256 Go/Platinum/Windows 11Home+Clavier Surface avec stylet fin",
    "Votre ordinateur portable tout-en-un avec des performances de pointe et une technologie d'IA pour vous aider dans toutes les tâches dont vous avez besoin. Améliorez votre flux de travail avec le nouveau processeur Snapdragon X Series puissant et cool et une conception flexible, pour que vous puissiez travailler et vous adapter n'importe où.",
    LanguageCode.French,
);

export const laptopDe1 = new ProductDetailTranslationDTO(
    "Surface Pro 11/X Plus/16 GB/256 GB/Platinum/Windows 11Home+Surface-Tastatur mit schmalem Stift",
    "Ihr All-in-One-Laptop mit Spitzenleistung und KI-Technologie unterstützt Sie bei allen anfallenden Aufgaben. Verbessern Sie Ihren Arbeitsablauf mit der neuen leistungsstarken und coolen Snapdragon X Series-CPU und dem flexiblen Design, damit Sie überall arbeiten und Anpassungen vornehmen können.",
    LanguageCode.German,
);

export const laptopIt1 = new ProductDetailTranslationDTO(
    "Surface Pro 11/X Plus/16 GB/256 GB/Platinum/Windows 11Home+Surface Keyboard con penna sottile",
    "Il tuo laptop all in one con prestazioni di picco incluse con tecnologia AI per aiutarti con qualsiasi attività di cui hai bisogno. Migliora il tuo flusso di lavoro con la nuova potente e fantastica CPU Snapdragon X Series e il design flessibile, per lavorare e adattarti ovunque.",
    LanguageCode.Italian,
);

export const laptopTh1 = new ProductDetailTranslationDTO(
    "Surface Pro 11/X Plus/16GB/256GB /Platinum/Windows 11Home+แป้นพิมพ์ Surface พร้อมปากกาขนาดบาง",
    "แล็ปท็อปออลอินวันพร้อมประสิทธิภาพสูงสุดพร้อมเทคโนโลยี AI ที่ช่วยให้คุณทำงานที่ต้องการได้ทุกอย่าง ยกระดับการทำงานของคุณด้วย CPU Snapdragon X Series ที่ทรงพลังและยอดเยี่ยมพร้อมดีไซน์ที่ยืดหยุ่น เพื่อให้คุณทำงานและปรับเปลี่ยนได้ทุกที่",
    LanguageCode.Thai,
);

export const laptop1 = new ProductDTO(LanguageCode.Thai, [
    laptopEn1,
    laptopEs1,
    laptopFr1,
    laptopDe1,
    laptopIt1,
    laptopTh1,
]);

export const search1 = new ProductSearchDTO("refrigerator", null, 1, 1);

export const search2 = new ProductSearchDTO("frigorífico", null, 2, 1);

export const search3 = new ProductSearchDTO("réfrigérateur", null, 3, 1);

export const search4 = new ProductSearchDTO("kühlschrank", null, 1, 2);

export const search5 = new ProductSearchDTO("frigorifero", null, 2, 2);

export const search6 = new ProductSearchDTO("ตู้เย็น", null, 1, 10);

export const search7 = new ProductSearchDTO("refrigerator", null, 10, 10);

export const search8 = new ProductSearchDTO(
    "laptop",
    LanguageCode.English,
    1,
    10,
);

export const search9 = new ProductSearchDTO(
    "cool",
    LanguageCode.English,
    1,
    10,
);

export const search10 = new ProductSearchDTO("cool", null, 1, 10);
