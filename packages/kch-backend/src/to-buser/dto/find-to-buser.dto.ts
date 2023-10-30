import { IsNumber } from 'class-validator';

export class FindAllByPaginationDto {
  @IsNumber()
  pageNo: number;

  @IsNumber()
  pageSize: number;
}
