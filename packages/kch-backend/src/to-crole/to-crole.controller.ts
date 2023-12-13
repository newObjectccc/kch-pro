import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToCroleService } from './to-crole.service';
import { CreateToCroleDto } from './dto/create-to-crole.dto';
import { UpdateToCroleDto } from './dto/update-to-crole.dto';

@Controller('to-crole')
export class ToCroleController {
  constructor(private readonly toCroleService: ToCroleService) {}

  @Post()
  create(@Body() createToCroleDto: CreateToCroleDto) {
    return this.toCroleService.create(createToCroleDto);
  }

  @Get()
  findAll() {
    return this.toCroleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toCroleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToCroleDto: UpdateToCroleDto) {
    return this.toCroleService.update(+id, updateToCroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toCroleService.remove(+id);
  }
}
