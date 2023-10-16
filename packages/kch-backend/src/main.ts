import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV ?? 'production'}` });

async function bootstrap() {
  // app instance
  const app = await NestFactory.create(AppModule);

  // global pipe
  app.useGlobalPipes(new ValidationPipe());

  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Swagger Documentation')
    .setDescription('Apis Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  // app run
  await app.listen(process.env.SERVER_EXPOSE_PORT ?? 3000);
}
bootstrap();
