import { PartialType } from '@nestjs/swagger';
import { CreateToBpermissionDto } from './create-to-bpermission.dto';

export class UpdateToBpermissionDto extends PartialType(CreateToBpermissionDto) {}
