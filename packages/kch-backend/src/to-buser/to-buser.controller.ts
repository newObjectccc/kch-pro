import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { CreateToBuserDto } from 'src/to-buser/dto/create-to-buser.dto';
import { FindListBuserDto, FindToBuserDto } from 'src/to-buser/dto/find-to-buser.dto';
import { LoginInToBuserDto } from 'src/to-buser/dto/loginIn-to-buser.dto';
import { UpdateToBuserDto } from 'src/to-buser/dto/update-to-buser.dto';
import { ToBuserService } from 'src/to-buser/to-buser.service';

// @ApiTags('to-buser')
@Controller('to-buser')
export class ToBuserController {
  constructor(private readonly toBuserService: ToBuserService) {}

  @Post('list')
  findAll(@Body() findAllToBuserDto: FindListBuserDto) {
    return this.toBuserService.findAll(findAllToBuserDto);
  }

  @Post('find')
  findOne(@Body() findOneBuserDto: FindToBuserDto) {
    return this.toBuserService.findOne(findOneBuserDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', example: '1' })
  update(@Param('id') id: string, @Body() updateToBuserDto: UpdateToBuserDto) {
    return this.toBuserService.update(+id, updateToBuserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', example: '1' })
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
