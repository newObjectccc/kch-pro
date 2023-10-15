import { IsNotEmpty } from 'class-validator';

export class CreateToBuserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password_hash: string;

  @IsNotEmpty()
  phone_num: string;

  @IsNotEmpty()
  pid: number;

  @IsNotEmpty()
  created_at: string;

  @IsNotEmpty()
  created_by_id: string;
}
