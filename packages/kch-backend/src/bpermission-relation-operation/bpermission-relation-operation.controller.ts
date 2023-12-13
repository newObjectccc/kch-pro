import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BpermissionRelationOperationService } from './bpermission-relation-operation.service';
import { CreateBpermissionRelationOperationDto } from './dto/create-bpermission-relation-operation.dto';
import { UpdateBpermissionRelationOperationDto } from './dto/update-bpermission-relation-operation.dto';

@Controller('bpermission-relation-operation')
export class BpermissionRelationOperationController {
  constructor(
    private readonly bpermissionRelationOperationService: BpermissionRelationOperationService
  ) {}

  @Post()
  create(@Body() createBpermissionRelationOperationDto: CreateBpermissionRelationOperationDto) {
    return this.bpermissionRelationOperationService.create(createBpermissionRelationOperationDto);
  }

  @Get()
  findAll() {
    return this.bpermissionRelationOperationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bpermissionRelationOperationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBpermissionRelationOperationDto: UpdateBpermissionRelationOperationDto
  ) {
    return this.bpermissionRelationOperationService.update(
      +id,
      updateBpermissionRelationOperationDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bpermissionRelationOperationService.remove(+id);
  }
}
