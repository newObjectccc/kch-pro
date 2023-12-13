import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToBuser } from 'src/to-buser/entities/to-buser.entity';
import { ToBuserController } from './to-buser.controller';
import { ToBuserService } from './to-buser.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToBuser])],
  controllers: [ToBuserController],
  providers: [ToBuserService],
  exports: [ToBuserService]
})
export class ToBuserModule {}
