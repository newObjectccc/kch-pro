import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateToBuserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password_hash: string;

  @IsNotEmpty()
  phone_num: string;

  @IsNotEmpty()
  pid: number;

  @IsDateString()
  created_at: string;

  @IsNotEmpty()
  created_by_id: string;

  @IsNotEmpty()
  created_by: string;
}
