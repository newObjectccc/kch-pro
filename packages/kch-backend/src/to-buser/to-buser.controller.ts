import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateToBuserDto } from './dto/create-to-buser.dto';
import { UpdateOneParamsDto, UpdateToBuserDto } from './dto/update-to-buser.dto';
import { ToBuserService } from './to-buser.service';

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
  update(@Param() params: UpdateOneParamsDto, @Body() updateToBuserDto: UpdateToBuserDto) {
    return this.toBuserService.update(+params.id, updateToBuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toBuserService.remove(+id);
  }
}
