import { Injectable } from '@nestjs/common';
import { CreateToCuserDto } from './dto/create-to-cuser.dto';
import { UpdateToCuserDto } from './dto/update-to-cuser.dto';

@Injectable()
export class ToCuserService {
  create(createToCuserDto: CreateToCuserDto) {
    return 'This action adds a new toCuser';
  }

  findAll() {
    return `This action returns all toCuser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toCuser`;
  }

  update(id: number, updateToCuserDto: UpdateToCuserDto) {
    return `This action updates a #${id} toCuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} toCuser`;
  }
}
