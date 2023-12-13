import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToCrole } from 'src/to-crole/entities/to-crole.entity';
import { ToCroleController } from './to-crole.controller';
import { ToCroleService } from './to-crole.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToCrole])],
  controllers: [ToCroleController],
  providers: [ToCroleService]
})
export class ToCroleModule {}
