import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_MAP } from 'dictionary';
import { BroleRelationBuser } from 'src/brole-relation-buser/entities/brole-relation-buser.entity';
import { ToBroleService } from 'src/to-brole/to-brole.service';
import { ToBuserService } from 'src/to-buser/to-buser.service';
import { Repository } from 'typeorm';
import { CreateBroleRelationBuserDto } from './dto/create-brole-relation-buser.dto';
import { UpdateBroleRelationBuserDto } from './dto/update-brole-relation-buser.dto';

@Injectable()
export class BroleRelationBuserService {
  constructor(
    @InjectRepository(BroleRelationBuser)
    private bRoleRelationBuser: Repository<BroleRelationBuser>,
    private toBuserService: ToBuserService,
    private toBroleService: ToBroleService
  ) {}

  async create(createBroleRelationBuserDto: CreateBroleRelationBuserDto) {
    const { userId, roleId } = createBroleRelationBuserDto;
    const isUserIdExsit = await this.toBuserService.findOne({ id: +userId });
    if (!isUserIdExsit) throw new HttpException(ERROR_MAP.get('USER_NOT_EXIST'), 201);
    const isRoleIdExsit = await this.toBroleService.findOne(+roleId);
    if (!isRoleIdExsit) throw new HttpException(ERROR_MAP.get('ROLE_NOT_EXIST'), 201);
    const res = await this.bRoleRelationBuser.save(createBroleRelationBuserDto);
    return {
      code: '000',
      message: '操作成功',
      data: res
    };
  }

  findAll() {
    return `This action returns all broleRelationBuser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} broleRelationBuser`;
  }

  update(id: number, updateBroleRelationBuserDto: UpdateBroleRelationBuserDto) {
    return `This action updates a #${id} broleRelationBuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} broleRelationBuser`;
  }
}
