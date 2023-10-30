import { PartialType } from '@nestjs/swagger';
import { CreateToBroleDto } from './create-to-brole.dto';

export class UpdateToBroleDto extends PartialType(CreateToBroleDto) {}
