import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsMobilePhone, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateToBuserDto {
  @ApiProperty({ default: '李超' })
  username: string;

  @ApiProperty({ default: '123456' })
  password: string;

  @ApiProperty({ default: '18108370777' })
  @IsMobilePhone('zh-CN')
  phoneNum: string;

  // @IsInt()
  // pid: number;

  @ApiProperty({ default: '2023-11-07T07:40:51.069Z' })
  @IsDateString()
  updatedAt: string;

  @ApiProperty({ default: '1' })
  @IsNotEmpty()
  updatedById: string;

  @ApiProperty({ default: '陈鑫铄' })
  @IsNotEmpty()
  updatedBy: string;
}

export class IsNumStringDto {
  @IsNumberString()
  id: number;
}
