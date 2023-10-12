import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToBuserService } from './to-buser.service';
import { CreateToBuserDto } from './dto/create-to-buser.dto';
import { UpdateToBuserDto } from './dto/update-to-buser.dto';

@Controller('to-buser')
export class ToBuserController {
  constructor(private readonly toBuserService: ToBuserService) {}

  @Post()
  create(@Body() createToBuserDto: CreateToBuserDto) {
    return this.toBuserService.create(createToBuserDto);
  }

  @Get()
  findAll() {
    return this.toBuserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toBuserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToBuserDto: UpdateToBuserDto) {
    return this.toBuserService.update(+id, updateToBuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toBuserService.remove(+id);
  }
}
