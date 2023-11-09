import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { FindListBuserDto } from 'src/to-buser/dto/find-to-buser.dto';
import { FindOneByCuserDto, SignInCuserDto } from 'src/to-cuser/dto/find-to-cuser.dto';
import { ToCuser } from 'src/to-cuser/entities/to-cuser.entity';
import { Repository } from 'typeorm';
import { CreateToCuserDto } from './dto/create-to-cuser.dto';
import { UpdateToCuserDto } from './dto/update-to-cuser.dto';

@Injectable()
export class ToCuserService {
  constructor(
    @InjectRepository(ToCuser)
    private tocUserRepository: Repository<ToCuser>
  ) {}

  async create(createToCuserDto: CreateToCuserDto) {
    let res = null;
    try {
      res = await this.tocUserRepository.save(createToCuserDto);
    } catch {}
    return res;
  }

  async findAll(findAllByPagination: FindListBuserDto) {
    const { pageNo, pageSize: take, ...restParams } = findAllByPagination;
    const res = await this.tocUserRepository.find({ skip: pageNo * take, take, where: restParams });
    return {
      code: '000',
      message: '操作成功',
      data: res ?? []
    };
  }

  async findOne(findOneByCuserDto: FindOneByCuserDto) {
    const res = await this.tocUserRepository.findOneBy(findOneByCuserDto);
    if (!res) throw new HttpException(ERROR_MAP.get('USER_NOT_EXIST'), 201);
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async update(id: number, updateToCuserDto: UpdateToCuserDto) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    const res = await this.tocUserRepository.update(id, updateToCuserDto);
    return {
      code: '000',
      message: '修改成功',
      data: res
    };
  }

  async remove(id: number) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    const res = await this.tocUserRepository.delete(id);
    return {
      code: '000',
      message: '删除成功'
    };
  }

  async register(createToCuserDto: CreateToCuserDto) {
    const res = await this.create(createToCuserDto);
    if (!res) throw new HttpException(ERROR_MAP.get('REGISTER_FAILED'), 201);
    return {
      code: '000',
      message: '注册成功'
    };
  }

  async login(signInCuserDto: SignInCuserDto) {
    let res = null;
    res = await this.findOne(signInCuserDto);
    if (!res) throw new HttpException(ERROR_MAP.get('USER_NOT_EXIST'), 201);
    return {
      code: '000',
      message: '登录成功',
      data: res
    };
  }
}
