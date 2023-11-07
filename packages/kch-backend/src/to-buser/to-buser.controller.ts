import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ERROR_MAP } from 'dictionary';
import { CreateToBuserDto } from 'src/to-buser/dto/create-to-buser.dto';
import { FindAllByPaginationDto } from 'src/to-buser/dto/find-to-buser.dto';
import { LoginInToBuserDto } from 'src/to-buser/dto/loginIn-to-buser.dto';
import { UpdateToBuserDto } from 'src/to-buser/dto/update-to-buser.dto';
import { ToBuserService } from 'src/to-buser/to-buser.service';

// @ApiTags('to-buser')
@Controller('to-buser')
export class ToBuserController {
  constructor(private readonly toBuserService: ToBuserService) {}

  // @Post()
  // create(@Body() createToBuserDto: CreateToBuserDto) {
  //   return this.toBuserService.create(createToBuserDto);
  // }

  @Post()
  findAll(@Body() findAllToBuserDto: FindAllByPaginationDto) {
    return this.toBuserService.findAll(findAllToBuserDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', example: '1' })
  findOne(@Param('id') id: string) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    return this.toBuserService.findOne({ id: +id });
  }

  @Patch(':id')
  @ApiParam({ name: 'id', example: '1' })
  update(@Param('id') id: string, @Body() updateToBuserDto: UpdateToBuserDto) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    return this.toBuserService.update(+id, updateToBuserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', example: '1' })
  remove(@Param('id') id: string) {
    if (isNaN(id as any)) throw new HttpException(ERROR_MAP.get('UNKNOWN_USER_ID'), 201);
    return this.toBuserService.remove(+id);
  }

  @Post('loginIn')
  loginIn(@Body() loginInToBuser: LoginInToBuserDto) {
    return this.toBuserService.loginIn(loginInToBuser);
  }

  @Post('register')
  register(@Body() registerToBuser: CreateToBuserDto) {
    return this.toBuserService.register(registerToBuser);
  }
}
