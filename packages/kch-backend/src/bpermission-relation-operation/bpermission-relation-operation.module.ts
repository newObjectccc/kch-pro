import { Module } from '@nestjs/common';
import { BpermissionRelationOperationService } from './bpermission-relation-operation.service';
import { BpermissionRelationOperationController } from './bpermission-relation-operation.controller';

@Module({
  controllers: [BpermissionRelationOperationController],
  providers: [BpermissionRelationOperationService]
})
export class BpermissionRelationOperationModule {}
