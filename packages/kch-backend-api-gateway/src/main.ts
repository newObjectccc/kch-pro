import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { AppModule } from './app.module';
const fs = require('fs');
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV ?? 'production'}`
});

const httpsOptions = {
  key: fs.readFileSync('../etc/rysyclub.com.key'),
  cert: fs.readFileSync('../etc/rysyclub.com_bundle.crt')
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, bodyParser: false, httpsOptions });
  app.use(helmet());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.SERVER_EXPOSE_PORT ?? 80);
}
bootstrap();
