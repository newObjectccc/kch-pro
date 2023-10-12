import { Module } from '@nestjs/common';
import { ToCuserService } from './to-cuser.service';
import { ToCuserController } from './to-cuser.controller';

@Module({
  controllers: [ToCuserController],
  providers: [ToCuserService]
})
export class ToCuserModule {}
