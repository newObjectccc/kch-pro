import { TypeOrmModule } from '@nestjs/typeorm';
import { ToBuserModule } from './to-buser/to-buser.module';
import { ToCuserModule } from './to-cuser/to-cuser.module';
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV ?? 'production'}` });

export const appModules = [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV !== 'production' // 生产中勿用，否则可能丢失生产数据
  }),
  ToBuserModule,
  ToCuserModule
];
