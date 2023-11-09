import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { FindAllByToCuserDto, FindOneByCuserDto } from 'src/to-cuser/dto/find-to-cuser.dto';
import { CreateToCuserDto } from './dto/create-to-cuser.dto';
import { UpdateToCuserDto } from './dto/update-to-cuser.dto';
import { ToCuserService } from './to-cuser.service';

@Controller('to-cuser')
export class ToCuserController {
  constructor(private readonly toCuserService: ToCuserService) {}

  @Post('register')
  register(@Body() createToCuserDto: CreateToCuserDto) {
    return this.toCuserService.register(createToCuserDto);
  }

  @Post('list')
  findAll(@Body() findAllToCuser: FindAllByToCuserDto) {
    return this.toCuserService.findAll(findAllToCuser);
  }

  @Post()
  findOne(@Body() findOneByCuserDto: FindOneByCuserDto) {
    return this.toCuserService.findOne(findOneByCuserDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', example: '1' })
  update(@Param('id') id: string, @Body() updateToCuserDto: UpdateToCuserDto) {
    return this.toCuserService.update(+id, updateToCuserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', example: '1' })
  remove(@Param('id') id: string) {
    return this.toCuserService.remove(+id);
  }
}
