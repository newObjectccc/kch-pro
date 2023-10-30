import { IsMobilePhone, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateToBuserDto {
  @IsNotEmpty()
  username: string;

  @IsNumberString()
  pid: number;

  @IsMobilePhone('zh-CN')
  phoneNum: string;

  @IsNotEmpty()
  password: string;

  // @IsNotEmpty()
  // phoneNum: string;

  // @IsNotEmpty()
  // pid: number;

  // @IsDateString()
  // createdAt: string;

  // @IsNotEmpty()
  // createdById: string;

  // @IsNotEmpty()
  // createdBy: string;
}

export class FindToBuserDto {
  id?: number;
  phoneNum?: string;
}
