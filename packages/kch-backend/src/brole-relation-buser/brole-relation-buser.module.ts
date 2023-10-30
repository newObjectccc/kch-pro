import { Module } from '@nestjs/common';
import { BroleRelationBuserService } from './brole-relation-buser.service';
import { BroleRelationBuserController } from './brole-relation-buser.controller';

@Module({
  controllers: [BroleRelationBuserController],
  providers: [BroleRelationBuserService]
})
export class BroleRelationBuserModule {}
