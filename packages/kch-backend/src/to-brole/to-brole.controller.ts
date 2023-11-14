import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { FindBroleDto, FindListBroleDto } from 'src/to-brole/dto/find-to-brole.dto';
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

  @Post('list')
  findAll(@Body() findListToBroleDto: FindListBroleDto) {
    return this.toBroleService.findAll(findListToBroleDto);
  }

  @Post('find')
  findOne(@Body() fields: FindBroleDto) {
    return this.toBroleService.findOne(fields);
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
