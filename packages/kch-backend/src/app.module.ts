import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToBuserModule } from './to-buser/to-buser.module';
import { ToCuserModule } from './to-cuser/to-cuser.module';

@Module({
  imports: [ToBuserModule, ToCuserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
