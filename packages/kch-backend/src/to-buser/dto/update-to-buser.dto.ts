import { PartialType } from '@nestjs/mapped-types';
import { CreateToBuserDto } from './create-to-buser.dto';

export class UpdateToBuserDto extends PartialType(CreateToBuserDto) {}
