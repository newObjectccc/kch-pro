import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateToBroleDto {
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  pid: number;
}
