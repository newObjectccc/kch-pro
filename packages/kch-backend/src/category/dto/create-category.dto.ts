import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @ApiProperty({ default: '评测' })
  name: string;

  // @IsNumber()
  @ApiProperty({ default: 1 })
  pid: number;
}
