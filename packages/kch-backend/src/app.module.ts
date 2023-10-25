import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GlobalHttpExceptionFilter } from 'filters/global-http-exception.filter';
import { appModules } from 'src/modulesMain';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: appModules,
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: GlobalHttpExceptionFilter }]
})
export class AppModule {}
