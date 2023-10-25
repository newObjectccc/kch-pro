import { IsMobilePhone, IsNotEmpty } from 'class-validator';

export class CreateToBuserDto {
  @IsNotEmpty()
  userName: string;

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
