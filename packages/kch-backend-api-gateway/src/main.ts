import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { AppModule } from './app.module';
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV ?? 'production'}`
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, bodyParser: false });
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.SERVER_EXPOSE_PORT ?? 443);
}
bootstrap();
