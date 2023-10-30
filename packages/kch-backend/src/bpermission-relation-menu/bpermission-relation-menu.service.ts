import { Injectable } from '@nestjs/common';
import { CreateBpermissionRelationMenuDto } from './dto/create-bpermission-relation-menu.dto';
import { UpdateBpermissionRelationMenuDto } from './dto/update-bpermission-relation-menu.dto';

@Injectable()
export class BpermissionRelationMenuService {
  create(createBpermissionRelationMenuDto: CreateBpermissionRelationMenuDto) {
    return 'This action adds a new bpermissionRelationMenu';
  }

  findAll() {
    return `This action returns all bpermissionRelationMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bpermissionRelationMenu`;
  }

  update(id: number, updateBpermissionRelationMenuDto: UpdateBpermissionRelationMenuDto) {
    return `This action updates a #${id} bpermissionRelationMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} bpermissionRelationMenu`;
  }
}
