import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToCuser } from 'src/to-cuser/entities/to-cuser.entity';
import { ToCuserController } from './to-cuser.controller';
import { ToCuserService } from './to-cuser.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToCuser])],
  controllers: [ToCuserController],
  providers: [ToCuserService]
})
export class ToCuserModule {}
