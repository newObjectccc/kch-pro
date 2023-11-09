import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  pageNo: number;

  @IsNumber()
  pageSize: number;
}

export class FindToBuser {
  @ApiProperty({ default: '1' })
  @IsNumber()
  id: number;

  @ApiProperty({ default: '18108370361' })
  @IsNumber()
  phoneNum: string;
}

export class FindToBuserDto extends PartialType(FindToBuser) {}
export class FindListBuserDto extends IntersectionType(PaginationDto, FindToBuserDto) {}
