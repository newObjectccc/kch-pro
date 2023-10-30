import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BroleRelationBpermissionService } from './brole-relation-bpermission.service';
import { CreateBroleRelationBpermissionDto } from './dto/create-brole-relation-bpermission.dto';
import { UpdateBroleRelationBpermissionDto } from './dto/update-brole-relation-bpermission.dto';

@Controller('brole-relation-bpermission')
export class BroleRelationBpermissionController {
  constructor(private readonly broleRelationBpermissionService: BroleRelationBpermissionService) {}

  @Post()
  create(@Body() createBroleRelationBpermissionDto: CreateBroleRelationBpermissionDto) {
    return this.broleRelationBpermissionService.create(createBroleRelationBpermissionDto);
  }

  @Get()
  findAll() {
    return this.broleRelationBpermissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.broleRelationBpermissionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBroleRelationBpermissionDto: UpdateBroleRelationBpermissionDto
  ) {
    return this.broleRelationBpermissionService.update(+id, updateBroleRelationBpermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.broleRelationBpermissionService.remove(+id);
  }
}
