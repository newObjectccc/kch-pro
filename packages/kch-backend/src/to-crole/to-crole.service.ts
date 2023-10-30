import { Injectable } from '@nestjs/common';
import { CreateToCroleDto } from './dto/create-to-crole.dto';
import { UpdateToCroleDto } from './dto/update-to-crole.dto';

@Injectable()
export class ToCroleService {
  create(createToCroleDto: CreateToCroleDto) {
    return 'This action adds a new toCrole';
  }

  findAll() {
    return `This action returns all toCrole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toCrole`;
  }

  update(id: number, updateToCroleDto: UpdateToCroleDto) {
    return `This action updates a #${id} toCrole`;
  }

  remove(id: number) {
    return `This action removes a #${id} toCrole`;
  }
}
