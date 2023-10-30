import { IsDateString, IsInt, IsMobilePhone, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateToBuserDto {
  username: string;

  password: string;

  @IsMobilePhone()
  phoneNum: string;

  @IsInt()
  pid: number;

  @IsDateString()
  updatedAt: string;

  @IsNotEmpty()
  updatedById: string;

  @IsNotEmpty()
  updatedBy: string;
}

export class UpdateOneParamsDto {
  @IsNumberString()
  id: number;
}
