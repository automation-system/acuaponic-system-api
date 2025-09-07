import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ResponseInterceptor } from "./shared/interceptors/response.interceptor";
import { DomainExceptionFilter } from "./shared/filters/domain-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Acuaponia API")
    .setDescription("API de automatización con sensores y actuadores")
    .setVersion("1.0")
    .addTag("automation")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new DomainExceptionFilter());


  await app.listen(3000);
}
bootstrap();
