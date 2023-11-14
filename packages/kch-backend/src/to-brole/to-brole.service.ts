import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { findListByPagination, isEmptyObject } from 'helpers';
import { FindBroleDto, FindListBroleDto } from 'src/to-brole/dto/find-to-brole.dto';
import { ToBrole } from 'src/to-brole/entities/to-brole.entity';
import { Repository } from 'typeorm';
import { CreateToBroleDto } from './dto/create-to-brole.dto';
import { UpdateToBroleDto } from './dto/update-to-brole.dto';

@Injectable()
export class ToBroleService {
  constructor(
    @InjectRepository(ToBrole)
    private tobRoleRepository: Repository<ToBrole>
  ) {}

  async createTobRole(createToBroleDto: CreateToBroleDto) {
    const { pid } = createToBroleDto;
    if (pid) {
      const isExsitParentByPid = await this.tobRoleRepository.findOneBy({ pid: +pid });
      if (!isExsitParentByPid) throw new HttpException(ERROR_MAP.get('PID_NOT_EXIST'), 201);
    }
    const res = await this.tobRoleRepository.save(createToBroleDto);
    if (!res) throw new HttpException(ERROR_MAP.get('ROLE_NAME_EXIST'), 201);
    return {
      code: '000',
      message: '添加成功',
      data: res
    };
  }

  async findAll(findListBroleDto: FindListBroleDto) {
    const res = await findListByPagination(findListBroleDto, this.tobRoleRepository);
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async findOne(fields: FindBroleDto) {
    if (await isEmptyObject(fields)) throw new HttpException(ERROR_MAP.get('INVALID_PARAMS'), 201);
    const res = await this.tobRoleRepository.findOneBy(fields);
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async update(id: number, updateToBroleDto: UpdateToBroleDto) {
    const res = await this.tobRoleRepository.update(id, updateToBroleDto);
    return {
      code: '000',
      message: '修改成功'
    };
  }

  async remove(id: number) {
    const res = await this.tobRoleRepository.delete(id);
    return {
      code: '000',
      message: '删除成功'
    };
  }
}
