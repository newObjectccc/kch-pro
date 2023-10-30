import { Injectable } from '@nestjs/common';
import { CreateToBpermissionDto } from './dto/create-to-bpermission.dto';
import { UpdateToBpermissionDto } from './dto/update-to-bpermission.dto';

@Injectable()
export class ToBpermissionService {
  create(createToBpermissionDto: CreateToBpermissionDto) {
    return 'This action adds a new toBpermission';
  }

  findAll() {
    return `This action returns all toBpermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toBpermission`;
  }

  update(id: number, updateToBpermissionDto: UpdateToBpermissionDto) {
    return `This action updates a #${id} toBpermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} toBpermission`;
  }
}
