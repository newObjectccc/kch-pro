import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty, IsNumberString, IsOptional } from 'class-validator';

export class CreateToBuserDto {
  @ApiProperty({ default: '李超是母零' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: '1' })
  @IsNumberString()
  @IsOptional()
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
