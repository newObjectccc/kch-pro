import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV ?? 'production'}` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.SERVER_EXPOSE_PORT ?? 3000);
}
bootstrap();
