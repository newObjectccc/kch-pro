import { PartialType } from '@nestjs/swagger';
import { CreateBpermissionRelationOperationDto } from './create-bpermission-relation-operation.dto';

export class UpdateBpermissionRelationOperationDto extends PartialType(
  CreateBpermissionRelationOperationDto
) {}
