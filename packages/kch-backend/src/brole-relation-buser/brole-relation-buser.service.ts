import { Injectable } from '@nestjs/common';
import { CreateBroleRelationBuserDto } from './dto/create-brole-relation-buser.dto';
import { UpdateBroleRelationBuserDto } from './dto/update-brole-relation-buser.dto';

@Injectable()
export class BroleRelationBuserService {
  create(createBroleRelationBuserDto: CreateBroleRelationBuserDto) {
    return 'This action adds a new broleRelationBuser';
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
