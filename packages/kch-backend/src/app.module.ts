import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalHttpExceptionFilter } from 'filters/global-http-exception.filter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BpermissionRelationMenuModule } from './bpermission-relation-menu/bpermission-relation-menu.module';
import { BpermissionRelationOperationModule } from './bpermission-relation-operation/bpermission-relation-operation.module';
import { BroleRelationBpermissionModule } from './brole-relation-bpermission/brole-relation-bpermission.module';
import { BroleRelationBuserModule } from './brole-relation-buser/brole-relation-buser.module';
import { CategoryModule } from './category/category.module';
import { CertificateModule } from './certificate/certificate.module';
import { ChapterModule } from './chapter/chapter.module';
import { CourseModule } from './course/course.module';
import { OrderModule } from './order/order.module';
import { ToBpermissionModule } from './to-bpermission/to-bpermission.module';
import { ToBroleModule } from './to-brole/to-brole.module';
import { ToBuserModule } from './to-buser/to-buser.module';
import { ToCroleModule } from './to-crole/to-crole.module';
import { ToCuserModule } from './to-cuser/to-cuser.module';
import { UploadModule } from './upload/upload.module';

require('dotenv').config({ path: `./.env.${process.env.NODE_ENV ?? 'production'}` });

@Module({
  imports: [
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
    ToCuserModule,
    ToBroleModule,
    ToCroleModule,
    ToBpermissionModule,
    BroleRelationBuserModule,
    BroleRelationBpermissionModule,
    BpermissionRelationMenuModule,
    BpermissionRelationOperationModule,
    CategoryModule,
    UploadModule,
    CourseModule,
    ChapterModule,
    CertificateModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: GlobalHttpExceptionFilter }]
})
export class AppModule {}
