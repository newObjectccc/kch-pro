import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';

export class FindCategoryDto extends PartialType(CreateCategoryDto) {
  id?: number;
}
export class FindListCategoryDto extends FindCategoryDto {}
