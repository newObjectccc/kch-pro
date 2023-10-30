import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BroleRelationBuserService } from './brole-relation-buser.service';
import { CreateBroleRelationBuserDto } from './dto/create-brole-relation-buser.dto';
import { UpdateBroleRelationBuserDto } from './dto/update-brole-relation-buser.dto';

@Controller('brole-relation-buser')
export class BroleRelationBuserController {
  constructor(private readonly broleRelationBuserService: BroleRelationBuserService) {}

  @Post()
  create(@Body() createBroleRelationBuserDto: CreateBroleRelationBuserDto) {
    return this.broleRelationBuserService.create(createBroleRelationBuserDto);
  }

  @Get()
  findAll() {
    return this.broleRelationBuserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.broleRelationBuserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBroleRelationBuserDto: UpdateBroleRelationBuserDto
  ) {
    return this.broleRelationBuserService.update(+id, updateBroleRelationBuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.broleRelationBuserService.remove(+id);
  }
}
