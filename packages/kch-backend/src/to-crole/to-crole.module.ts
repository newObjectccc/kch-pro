import { Module } from '@nestjs/common';
import { ToCroleService } from './to-crole.service';
import { ToCroleController } from './to-crole.controller';

@Module({
  controllers: [ToCroleController],
  providers: [ToCroleService]
})
export class ToCroleModule {}
