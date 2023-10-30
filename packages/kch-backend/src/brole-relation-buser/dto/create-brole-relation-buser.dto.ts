import { IsNumberString } from 'class-validator';

export class CreateBroleRelationBuserDto {
  @IsNumberString()
  userId: number;

  @IsNumberString()
  roleId: number;
}
