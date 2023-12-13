import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToBpermissionService } from './to-bpermission.service';
import { CreateToBpermissionDto } from './dto/create-to-bpermission.dto';
import { UpdateToBpermissionDto } from './dto/update-to-bpermission.dto';

@Controller('to-bpermission')
export class ToBpermissionController {
  constructor(private readonly toBpermissionService: ToBpermissionService) {}

  @Post()
  create(@Body() createToBpermissionDto: CreateToBpermissionDto) {
    return this.toBpermissionService.create(createToBpermissionDto);
  }

  @Get()
  findAll() {
    return this.toBpermissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toBpermissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToBpermissionDto: UpdateToBpermissionDto) {
    return this.toBpermissionService.update(+id, updateToBpermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toBpermissionService.remove(+id);
  }
}
