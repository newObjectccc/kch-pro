import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty } from 'class-validator';
export class LoginInToBuserDto {
  @ApiProperty({ default: '18108980361' })
  @IsMobilePhone('zh-CN')
  phoneNum: string;

  @ApiProperty({ default: '123456' })
  @IsNotEmpty()
  password: string;
}
