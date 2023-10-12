import { PartialType } from '@nestjs/mapped-types';
import { CreateToCuserDto } from './create-to-cuser.dto';

export class UpdateToCuserDto extends PartialType(CreateToCuserDto) {}
