import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateToBroleDto } from './dto/create-to-brole.dto';
import { UpdateToBroleDto } from './dto/update-to-brole.dto';
import { ToBroleService } from './to-brole.service';

@Controller('to-brole')
export class ToBroleController {
  constructor(private readonly toBroleService: ToBroleService) {}

  @Post()
  create(@Body() createToBroleDto: CreateToBroleDto) {
    return this.toBroleService.createTobRole(createToBroleDto);
  }

  @Get()
  findAll() {
    return this.toBroleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toBroleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToBroleDto: UpdateToBroleDto) {
    return this.toBroleService.update(+id, updateToBroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toBroleService.remove(+id);
  }
}
