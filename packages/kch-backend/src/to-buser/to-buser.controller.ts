import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateToBuserDto } from 'src/to-buser/dto/create-to-buser.dto';
import { FindAllByPaginationDto } from 'src/to-buser/dto/find-to-buser.dto';
import { LoginInToBuserDto } from 'src/to-buser/dto/loginIn-to-buser.dto';
import { ToBuserService } from 'src/to-buser/to-buser.service';

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
  findOne(@Param('id') id: string) {
    return this.toBuserService.findOne({ id: +id });
  }

  // @Patch(':id')
  // update(@Param() params: UpdateOneParamsDto, @Body() updateToBuserDto: UpdateToBuserDto) {
  //   return this.toBuserService.update(+params.id, updateToBuserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
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
