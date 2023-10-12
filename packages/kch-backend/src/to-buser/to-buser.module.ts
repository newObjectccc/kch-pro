import { Module } from '@nestjs/common';
import { ToBuserService } from './to-buser.service';
import { ToBuserController } from './to-buser.controller';

@Module({
  controllers: [ToBuserController],
  providers: [ToBuserService]
})
export class ToBuserModule {}
