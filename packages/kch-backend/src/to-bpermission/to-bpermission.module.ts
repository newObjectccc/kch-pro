import { Module } from '@nestjs/common';
import { ToBpermissionService } from './to-bpermission.service';
import { ToBpermissionController } from './to-bpermission.controller';

@Module({
  controllers: [ToBpermissionController],
  providers: [ToBpermissionService]
})
export class ToBpermissionModule {}
