import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToBuser } from 'src/to-buser/entities/to-buser.entity';
import { Repository } from 'typeorm';
import { CreateToBuserDto } from './dto/create-to-buser.dto';
import { UpdateToBuserDto } from './dto/update-to-buser.dto';

@Injectable()
export class ToBuserService {
  constructor(
    @InjectRepository(ToBuser)
    private tobUserRepository: Repository<ToBuser>
  ) {}

  async create(createToBuserDto: CreateToBuserDto) {
    const result = await this.tobUserRepository.save(createToBuserDto);
    return `This action adds a new toBuser ${JSON.stringify(result)}`;
  }

  findAll(): Promise<ToBuser[]> {
    return this.tobUserRepository.find();
  }

  findOne(id: number) {
    return this.tobUserRepository.findOneBy({ id });
  }

  async update(id: number, updateToBuserDto: UpdateToBuserDto) {
    const result = await this.tobUserRepository.update(id, updateToBuserDto);
    return `This action updates a #${id} toBuser ${JSON.stringify(result)}`;
  }

  async remove(id: number) {
    const result = await this.tobUserRepository.delete({ id });
    return `This action removes a #${id} toBuser ${JSON.stringify(result)}`;
  }
}
