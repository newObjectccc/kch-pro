import { Injectable } from '@nestjs/common';
import { CreateBpermissionRelationOperationDto } from './dto/create-bpermission-relation-operation.dto';
import { UpdateBpermissionRelationOperationDto } from './dto/update-bpermission-relation-operation.dto';

@Injectable()
export class BpermissionRelationOperationService {
  create(createBpermissionRelationOperationDto: CreateBpermissionRelationOperationDto) {
    return 'This action adds a new bpermissionRelationOperation';
  }

  findAll() {
    return `This action returns all bpermissionRelationOperation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bpermissionRelationOperation`;
  }

  update(id: number, updateBpermissionRelationOperationDto: UpdateBpermissionRelationOperationDto) {
    return `This action updates a #${id} bpermissionRelationOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} bpermissionRelationOperation`;
  }
}
