import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppModule } from './app.module';
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV ?? 'production'}`
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //createProxyMiddleware
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://127.0.0.1:${process.env.TARGET_SERVER_EXPOSE_PORT ?? 3000}`,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );

  await app.listen(process.env.SERVER_EXPOSE_PORT ?? 443);
}
bootstrap();
