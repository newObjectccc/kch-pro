import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BroleRelationBuser } from 'src/brole-relation-buser/entities/brole-relation-buser.entity';
import { ToBroleModule } from 'src/to-brole/to-brole.module';
import { ToBuserModule } from 'src/to-buser/to-buser.module';
import { BroleRelationBuserController } from './brole-relation-buser.controller';
import { BroleRelationBuserService } from './brole-relation-buser.service';

@Module({
  imports: [TypeOrmModule.forFeature([BroleRelationBuser]), ToBroleModule, ToBuserModule],
  controllers: [BroleRelationBuserController],
  providers: [BroleRelationBuserService]
})
export class BroleRelationBuserModule {}
