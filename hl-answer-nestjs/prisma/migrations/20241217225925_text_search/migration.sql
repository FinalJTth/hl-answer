-- AlterTable
ALTER TABLE "productDetailTranslations" ADD COLUMN     "textSearch" TSVECTOR;

CREATE OR REPLACE FUNCTION update_text_search_language()
RETURNS TRIGGER AS $$
BEGIN
    NEW."textSearch" := setweight(to_tsvector(
        CASE 
            WHEN NEW."languageId" = 'en' THEN 'english'::regconfig
            WHEN NEW."languageId" = 'fr' THEN 'french'::regconfig
            WHEN NEW."languageId" = 'de' THEN 'german'::regconfig
            WHEN NEW."languageId" = 'es' THEN 'spanish'::regconfig
            WHEN NEW."languageId" = 'it' THEN 'italian'::regconfig
            WHEN NEW."languageId" = 'th' THEN 'simple'::regconfig
            ELSE 'simple' 
        END,
        coalesce(NEW.name, '')
    ), 'A') || setweight(to_tsvector(
        CASE 
            WHEN NEW."languageId" = 'en' THEN 'english'::regconfig
            WHEN NEW."languageId" = 'fr' THEN 'french'::regconfig
            WHEN NEW."languageId" = 'de' THEN 'german'::regconfig
            WHEN NEW."languageId" = 'es' THEN 'spanish'::regconfig
            WHEN NEW."languageId" = 'it' THEN 'italian'::regconfig
            WHEN NEW."languageId" = 'th' THEN 'simple'::regconfig
            ELSE 'simple'::regconfig
        END,
        coalesce(NEW.description, '')
    ), 'B');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_text_search
BEFORE INSERT OR UPDATE ON "productDetailTranslations"
FOR EACH ROW
EXECUTE FUNCTION update_text_search_language();

-- CreateIndex
CREATE INDEX "productDetailTranslations_textSearch_idx" ON "productDetailTranslations" USING GIN ("textSearch");

INSERT INTO public.languages(id, "languageName") VALUES ('en', 'English');
INSERT INTO public.languages(id, "languageName") VALUES ('fr', 'Français');
INSERT INTO public.languages(id, "languageName") VALUES ('de', 'Deutsch');
INSERT INTO public.languages(id, "languageName") VALUES ('es', 'Español');
INSERT INTO public.languages(id, "languageName") VALUES ('it', 'Italiano');
INSERT INTO public.languages(id, "languageName") VALUES ('th', 'ไทย');