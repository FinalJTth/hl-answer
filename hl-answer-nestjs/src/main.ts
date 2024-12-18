import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
    SwaggerModule,
    DocumentBuilder,
    SwaggerDocumentOptions,
} from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    app.setGlobalPrefix("api/v1");

    const config = new DocumentBuilder()
        .setTitle("Product example")
        .setDescription("The Products API description")
        .setVersion("1.0")
        .addTag("products")
        .build();

    const options: SwaggerDocumentOptions = {
        operationIdFactory: (controllerKey: string, methodKey: string) =>
            methodKey,
    };
    const documentFactory = () =>
        SwaggerModule.createDocument(app, config, options);

    SwaggerModule.setup("api", app, documentFactory);

    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
