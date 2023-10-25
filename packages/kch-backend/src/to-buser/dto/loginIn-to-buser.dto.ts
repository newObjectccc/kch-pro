import { IsNotEmpty } from 'class-validator';
export class LoginInToBuserDto {
  @IsNotEmpty()
  phoneNum: string;

  @IsNotEmpty()
  password: string;
}
