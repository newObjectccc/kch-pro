import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { isEmptyObject } from 'helpers';
import { FindCategoryDto } from 'src/category/dto/find-category.dto';
import { Category } from 'src/category/entities/category.entity';
import { TreeRepository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: TreeRepository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    let res = null,
      parentNode = null;
    const { name, pid } = createCategoryDto;

    if (pid) {
      if (isNaN(pid)) throw new HttpException(ERROR_MAP.get('PID_NOT_EXIST'), 201);
      const pidIsExist = await this.findOne({ id: pid });
      if (!pidIsExist.data) throw new HttpException(ERROR_MAP.get('PID_NOT_EXIST'), 201);
      parentNode = pidIsExist.data;
      parentNode.children?.map((item) => {
        if (item.name === name) throw new HttpException(ERROR_MAP.get('CATEGORY_NAME_EXSIT'), 201);
      });
      createCategoryDto.parent = parentNode;
    }

    try {
      res = await this.categoryRepository.save(createCategoryDto);
    } catch (err) {
      console.log(err);
    }
    if (!res) throw new HttpException(ERROR_MAP.get('CATEGORY_NAME_EXSIT'), 201);
    return {
      code: '000',
      message: '创建成功'
    };
  }

  async findAll() {
    const res = await this.categoryRepository.findTrees();
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async findOne(fields: FindCategoryDto) {
    if (await isEmptyObject(fields)) throw new HttpException(ERROR_MAP.get('INVALID_PARAMS'), 201);
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
    try {
      const res = await this.categoryRepository.delete({ id });
    } catch (error) {
      if (error.code === 'ER_ROW_IS_REFERENCED_2')
        throw new HttpException(ERROR_MAP.get('PARENT_HAS_CHILDREN'), 201);
    }
    return {
      code: '000',
      message: '删除成功'
    };
  }
}
