import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { IsMobilePhone, IsNumber } from 'class-validator';

export class PaginationDto {
  @ApiProperty({ default: 1 })
  @IsNumber()
  pageNo: number;

  @ApiProperty({ default: 20 })
  @IsNumber()
  pageSize: number;
}

export class FindToBuser {
  @ApiProperty({ default: '1' })
  @IsNumber()
  id: number;

  @ApiProperty({ default: '18108370361' })
  @IsMobilePhone('zh-CN')
  phoneNum: string;
}

export class FindToBuserDto extends PartialType(FindToBuser) {}
export class FindListBuserDto extends IntersectionType(PaginationDto, FindToBuserDto) {}
