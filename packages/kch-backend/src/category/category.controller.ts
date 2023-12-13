import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Post('list')
  findAll() {
    return this.categoryService.findAll();
  }

  @Patch(':id')
  @ApiParam({ name: 'id', example: '1' })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', example: '1' })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }

  @Post('find')
  findOne(@Body() params: { name: string; id: number }) {
    return this.categoryService.findOne(params);
  }
}
