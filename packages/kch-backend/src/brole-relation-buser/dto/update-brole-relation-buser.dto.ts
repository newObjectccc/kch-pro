import { PartialType } from '@nestjs/swagger';
import { CreateBroleRelationBuserDto } from './create-brole-relation-buser.dto';

export class UpdateBroleRelationBuserDto extends PartialType(CreateBroleRelationBuserDto) {}
