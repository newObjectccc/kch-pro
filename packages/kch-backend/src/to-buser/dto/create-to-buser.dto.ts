import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateToBuserDto {
  @ApiProperty({ default: '李超是母零' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: '1' })
  @IsNumberString()
  pid: number;

  @ApiProperty({ default: '18199098808' })
  @IsMobilePhone('zh-CN')
  phoneNum: string;

  @ApiProperty({ default: '123456' })
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
  @ApiProperty({ default: '1' })
  id?: number;
  @ApiProperty({ default: '18108370361' })
  phoneNum?: string;
}
