import { Module } from '@nestjs/common';
import { BpermissionRelationMenuService } from './bpermission-relation-menu.service';
import { BpermissionRelationMenuController } from './bpermission-relation-menu.controller';

@Module({
  controllers: [BpermissionRelationMenuController],
  providers: [BpermissionRelationMenuService]
})
export class BpermissionRelationMenuModule {}
