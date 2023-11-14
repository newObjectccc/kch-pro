import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CreateToBroleDto } from './create-to-brole.dto';

export class UpdateToBroleDto extends PartialType(CreateToBroleDto) {
  @ApiProperty({ default: '清华老师' })
  @IsString()
  name: string;

  @ApiProperty({ default: '2023-11-07T09:23:03.701Z' })
  @IsDateString()
  updatedAt: string;

  @ApiProperty({ default: 1 })
  @IsNumber()
  updatedById: number;

  @ApiProperty({ default: '李超是母零' })
  @IsString()
  updatedByName: string;
}
