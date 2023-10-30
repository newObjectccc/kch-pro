import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToBrole } from 'src/to-brole/entities/to-brole.entity';
import { ToBroleController } from './to-brole.controller';
import { ToBroleService } from './to-brole.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToBrole])],
  controllers: [ToBroleController],
  providers: [ToBroleService],
  exports: [ToBroleService]
})
export class ToBroleModule {}
