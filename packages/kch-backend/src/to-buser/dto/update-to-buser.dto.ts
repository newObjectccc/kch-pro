// import { PartialType } from '@nestjs/mapped-types';
// import { CreateToBuserDto } from './create-to-buser.dto';

// export class UpdateToBuserDto extends PartialType(CreateToBuserDto) {}
import { IsDateString, IsInt, IsMobilePhone, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateToBuserDto {
  username: string;

  password_hash: string;

  @IsMobilePhone()
  phone_num: string;

  @IsInt()
  pid: number;

  @IsDateString()
  updated_at: string;

  @IsNotEmpty()
  updated_by_id: string;

  @IsNotEmpty()
  updated_by: string;
}

export class UpdateOneParamsDto {
  @IsNumberString()
  id: number;
}
