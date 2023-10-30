import { PartialType } from '@nestjs/swagger';
import { CreateBpermissionRelationMenuDto } from './create-bpermission-relation-menu.dto';

export class UpdateBpermissionRelationMenuDto extends PartialType(
  CreateBpermissionRelationMenuDto
) {}
