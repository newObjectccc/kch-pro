import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { comparePassword, hashPassword } from 'helpers';
import { CreateToBuserDto } from 'src/to-buser/dto/create-to-buser.dto';
import { FindListBuserDto, FindToBuserDto } from 'src/to-buser/dto/find-to-buser.dto';
import { LoginInToBuserDto } from 'src/to-buser/dto/loginIn-to-buser.dto';
import { UpdateToBuserDto } from 'src/to-buser/dto/update-to-buser.dto';
import { ToBuser } from 'src/to-buser/entities/to-buser.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToBuserService {
  constructor(
    @InjectRepository(ToBuser)
    private tobUserRepository: Repository<ToBuser>
  ) {}

  async create(createToBuserDto: CreateToBuserDto) {
    const { password } = createToBuserDto;
    let res = null;
    try {
      createToBuserDto.password = await hashPassword(password);
      res = await this.tobUserRepository.save(createToBuserDto);
    } catch {}
    return res;
  }

  async findAll(findAllByPagination: FindListBuserDto) {
    const { pageNo, pageSize: take, ...restParams } = findAllByPagination;
    const res = await this.tobUserRepository.find({ skip: pageNo * take, take, where: restParams });
    return {
      code: '000',
      message: '操作成功',
      data: res ?? []
    };
  }

  async findOne(fields: FindToBuserDto, noPwd: boolean = true) {
    const res = await this.tobUserRepository.findOneBy(fields);
    if (!res) throw new HttpException(ERROR_MAP.get('USER_NOT_EXIST'), 201);
    if (noPwd) delete res.password;
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  async update(id: number, updateToBuserDto: UpdateToBuserDto) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    const res = await this.tobUserRepository.update(id, updateToBuserDto);
    return {
      code: '000',
      message: '修改成功'
    };
  }

  async remove(id: number) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    const res = await this.tobUserRepository.delete({ id });
    return {
      code: '000',
      message: '删除成功'
    };
  }

  async loginIn(loginInToBuserDto: LoginInToBuserDto) {
    const { password, phoneNum } = loginInToBuserDto;
    let res = null;
    let checkPassword = false;
    res = await this.findOne({ phoneNum }, false);
    if (!res) throw new HttpException(ERROR_MAP.get('USER_NOT_EXIST'), 201);
    checkPassword = await comparePassword(password, res.data.password);
    if (!checkPassword) throw new HttpException(ERROR_MAP.get('WRONG_PASSWORD'), 201);
    delete res.password;
    return {
      code: '000',
      message: '登录成功',
      data: res.data
    };
  }

  async register(createToBuserDto: CreateToBuserDto) {
    const res = await this.create(createToBuserDto);
    if (!res) throw new HttpException(ERROR_MAP.get('REGISTER_FAILED'), 201);
    return {
      code: '000',
      message: '注册成功'
    };
  }
}
