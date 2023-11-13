import { IntersectionType, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { PaginationDto } from 'src/to-buser/dto/find-to-buser.dto';

export class FindCategoryDto extends PartialType(CreateCategoryDto) {
  id?: number;
}
export class FindListCategoryDto extends IntersectionType(PaginationDto, FindCategoryDto) {}
