import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToCuserService } from './to-cuser.service';
import { CreateToCuserDto } from './dto/create-to-cuser.dto';
import { UpdateToCuserDto } from './dto/update-to-cuser.dto';

@Controller('to-cuser')
export class ToCuserController {
  constructor(private readonly toCuserService: ToCuserService) {}

  @Post()
  create(@Body() createToCuserDto: CreateToCuserDto) {
    return this.toCuserService.create(createToCuserDto);
  }

  @Get()
  findAll() {
    return this.toCuserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toCuserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToCuserDto: UpdateToCuserDto) {
    return this.toCuserService.update(+id, updateToCuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toCuserService.remove(+id);
  }
}
