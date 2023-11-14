import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToBpermission } from 'src/to-bpermission/entities/to-bpermission.entity';
import { ToBpermissionController } from './to-bpermission.controller';
import { ToBpermissionService } from './to-bpermission.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToBpermission])],
  controllers: [ToBpermissionController],
  providers: [ToBpermissionService]
})
export class ToBpermissionModule {}
