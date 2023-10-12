import { Injectable } from '@nestjs/common';
import { CreateToBuserDto } from './dto/create-to-buser.dto';
import { UpdateToBuserDto } from './dto/update-to-buser.dto';

@Injectable()
export class ToBuserService {
  create(createToBuserDto: CreateToBuserDto) {
    return `This action adds a new toBuser ${JSON.stringify(createToBuserDto)}`;
  }

  findAll() {
    return `This action returns all toBuser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toBuser`;
  }

  update(id: number, updateToBuserDto: UpdateToBuserDto) {
    return `This action updates a #${id} toBuser ${JSON.stringify(updateToBuserDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} toBuser`;
  }
}
