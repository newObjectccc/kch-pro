import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateToCuserDto {
  @ApiProperty({ default: '18199990000' })
  @IsNotEmpty()
  phoneNum: string;

  @ApiProperty({ default: '李超是公一' })
  @IsNotEmpty()
  realname: string;

  @ApiProperty({ default: 'newkkklllooo123456' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: '1' })
  @IsNumber()
  roleId: number;

  @ApiProperty({ default: '四川' })
  @IsNumberString()
  province: string;
}
