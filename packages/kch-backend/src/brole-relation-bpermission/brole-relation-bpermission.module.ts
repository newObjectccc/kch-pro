import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BroleRelationBpermission } from 'src/brole-relation-bpermission/entities/brole-relation-bpermission.entity';
import { BroleRelationBpermissionController } from './brole-relation-bpermission.controller';
import { BroleRelationBpermissionService } from './brole-relation-bpermission.service';

@Module({
  imports: [TypeOrmModule.forFeature([BroleRelationBpermission])],
  controllers: [BroleRelationBpermissionController],
  providers: [BroleRelationBpermissionService]
})
export class BroleRelationBpermissionModule {}
