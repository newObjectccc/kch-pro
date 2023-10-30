import { Module } from '@nestjs/common';
import { BroleRelationBpermissionService } from './brole-relation-bpermission.service';
import { BroleRelationBpermissionController } from './brole-relation-bpermission.controller';

@Module({
  controllers: [BroleRelationBpermissionController],
  providers: [BroleRelationBpermissionService]
})
export class BroleRelationBpermissionModule {}
