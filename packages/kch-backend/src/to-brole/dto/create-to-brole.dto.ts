import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateToBroleDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  pid: number;
}
