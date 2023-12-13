import { Injectable } from '@nestjs/common';
import { CreateBroleRelationBpermissionDto } from './dto/create-brole-relation-bpermission.dto';
import { UpdateBroleRelationBpermissionDto } from './dto/update-brole-relation-bpermission.dto';

@Injectable()
export class BroleRelationBpermissionService {
  create(createBroleRelationBpermissionDto: CreateBroleRelationBpermissionDto) {
    return 'This action adds a new broleRelationBpermission';
  }

  findAll() {
    return `This action returns all broleRelationBpermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} broleRelationBpermission`;
  }

  update(id: number, updateBroleRelationBpermissionDto: UpdateBroleRelationBpermissionDto) {
    return `This action updates a #${id} broleRelationBpermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} broleRelationBpermission`;
  }
}
