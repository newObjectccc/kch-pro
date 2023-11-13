import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { findListByPagination } from 'helpers';
import { FindCategoryDto, FindListCategoryDto } from 'src/category/dto/find-category.dto';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    let res = null;
    const { name, pid } = createCategoryDto;
    if (pid) {
      if (isNaN(pid)) throw new HttpException(ERROR_MAP.get('PID_NOT_EXIST'), 201);
      const pidIsExist = await this.findOne({ id: pid });
      if (!pidIsExist) throw new HttpException(ERROR_MAP.get('PID_NOT_EXIST'), 201);
    }
    const isExsit = await this.findOne({ name });
    if (isExsit?.data) throw new HttpException(ERROR_MAP.get('CATEGORY_NAME_EXSIT'), 201);
    try {
      res = await this.categoryRepository.save(createCategoryDto);
    } catch {}
    if (!res) throw new HttpException(ERROR_MAP.get('CATEGORY_NAME_EXSIT'), 201);
    return {
      code: '000',
      message: '创建成功'
    };
  }

  async findAll(findListCategoryDto: FindListCategoryDto) {
    const res = await findListByPagination(findListCategoryDto, this.categoryRepository);
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async findOne(fields: FindCategoryDto) {
    const res = await this.categoryRepository.findOneBy(fields);
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const res = await this.categoryRepository.update(id, updateCategoryDto);
    return {
      code: '000',
      message: '修改成功'
    };
  }

  async remove(id: number) {
    const res = await this.categoryRepository.delete({ id });
    return {
      code: '000',
      message: '删除成功'
    };
  }
}
