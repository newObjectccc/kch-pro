import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { comparePassword, hashPassword } from 'helpers';
import { ToBuser } from 'src/to-buser/entities/to-buser.entity';
import { Repository } from 'typeorm';
import { CreateToBuserDto, FindToBuserDto } from './dto/create-to-buser.dto';
import { LoginInToBuserDto } from './dto/loginIn-to-buser.dto';
import { UpdateToBuserDto } from './dto/update-to-buser.dto';

@Injectable()
export class ToBuserService {
  constructor(
    @InjectRepository(ToBuser)
    private tobUserRepository: Repository<ToBuser>
  ) {}

  async create(createToBuserDto: CreateToBuserDto) {
    const { password } = createToBuserDto;
    let result = null;
    createToBuserDto.password = await hashPassword(password);
    result = await this.tobUserRepository.save(createToBuserDto);
    return result;
  }

  findAll(): Promise<ToBuser[]> {
    return this.tobUserRepository.find();
  }

  async findOne(fields: FindToBuserDto) {
    const res = await this.tobUserRepository.findOneBy(fields);
    return res;
  }

  async update(id: number, updateToBuserDto: UpdateToBuserDto) {
    const result = await this.tobUserRepository.update(id, updateToBuserDto);
    return `This action updates a #${id} toBuser ${JSON.stringify(result)}`;
  }

  async remove(id: number) {
    const result = await this.tobUserRepository.delete({ id });
    return `This action removes a #${id} toBuser ${JSON.stringify(result)}`;
  }

  async loginIn(loginInToBuserDto: LoginInToBuserDto) {
    const { password, phoneNum } = loginInToBuserDto;
    let res = null;
    let checkPassword = false;
    res = await this.findOne({ phoneNum });
    if (!res) throw new HttpException(ERROR_MAP.get('USER_NOT_EXIST'), 201);
    checkPassword = await comparePassword(password, res.password);
    if (!checkPassword) throw new HttpException(ERROR_MAP.get('WRONG_PASSWORD'), 201);
    delete res.password;
    return {
      code: '000',
      message: '登录成功',
      data: res
    };
  }

  async register(createToBuserDto: CreateToBuserDto) {
    const { phoneNum } = createToBuserDto;
    const isExist = await this.findOne({ phoneNum });
    if (isExist) throw new HttpException(ERROR_MAP.get('PHONENUMBER_EXIST'), 201);
    await this.create(createToBuserDto);
    return {
      code: '000',
      message: '注册成功'
    };
  }
}
