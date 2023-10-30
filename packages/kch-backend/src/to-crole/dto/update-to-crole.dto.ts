import { PartialType } from '@nestjs/swagger';
import { CreateToCroleDto } from './create-to-crole.dto';

export class UpdateToCroleDto extends PartialType(CreateToCroleDto) {}
