import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateToBroleDto {
  @ApiProperty({ default: '北师大老师' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: '1' })
  // @IsNumber()
  pid: number;

  @IsNotEmpty()
  createdBy: string;

  @IsNumber()
  createdById: number;
}
