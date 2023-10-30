import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BpermissionRelationMenuService } from './bpermission-relation-menu.service';
import { CreateBpermissionRelationMenuDto } from './dto/create-bpermission-relation-menu.dto';
import { UpdateBpermissionRelationMenuDto } from './dto/update-bpermission-relation-menu.dto';

@Controller('bpermission-relation-menu')
export class BpermissionRelationMenuController {
  constructor(private readonly bpermissionRelationMenuService: BpermissionRelationMenuService) {}

  @Post()
  create(@Body() createBpermissionRelationMenuDto: CreateBpermissionRelationMenuDto) {
    return this.bpermissionRelationMenuService.create(createBpermissionRelationMenuDto);
  }

  @Get()
  findAll() {
    return this.bpermissionRelationMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bpermissionRelationMenuService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBpermissionRelationMenuDto: UpdateBpermissionRelationMenuDto
  ) {
    return this.bpermissionRelationMenuService.update(+id, updateBpermissionRelationMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bpermissionRelationMenuService.remove(+id);
  }
}
