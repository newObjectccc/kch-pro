import { NestFactory } from '@nestjs/core';
import { ProxyMiddleware } from 'src/middleware/api-gateway.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(new ProxyMiddleware().use);
  await app.listen(process.env.SERVER_EXPOSE_PORT ?? 443);
}
bootstrap();
