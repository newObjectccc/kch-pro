import { PartialType } from '@nestjs/swagger';
import { CreateBroleRelationBpermissionDto } from './create-brole-relation-bpermission.dto';

export class UpdateBroleRelationBpermissionDto extends PartialType(
  CreateBroleRelationBpermissionDto
) {}
