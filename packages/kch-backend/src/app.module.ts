import { Module } from '@nestjs/common';
import { appModules } from 'src/modulesMain';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: appModules,
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
