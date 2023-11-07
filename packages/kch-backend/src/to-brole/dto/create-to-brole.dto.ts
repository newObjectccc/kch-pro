import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateToBroleDto {
  @ApiProperty({ default: '北师大老师' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: '1' })
  @IsNumberString()
  pid: number;
}
