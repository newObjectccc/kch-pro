import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty, IsNumber } from 'class-validator';
import { PaginationDto } from 'src/to-buser/dto/find-to-buser.dto';

export class FindAllByToCuser {
  @ApiProperty({ default: 200 })
  @IsNumber()
  integral: number;

  @ApiProperty({ default: '四川' })
  province: string;

  @ApiProperty({ default: 1 })
  @IsNumber()
  roleId: number;
}
export class FindAllByToCuserDto extends IntersectionType(
  PartialType(FindAllByToCuser),
  PaginationDto
) {}

export class FindOneByCuser {
  @ApiProperty({ default: '18108370361' })
  @IsMobilePhone('zh-CN')
  phoneNum: string;

  @ApiProperty({ default: 1 })
  @IsNumber()
  id: number;
}
export class FindOneByCuserDto extends PartialType(FindOneByCuser) {}

export class SignInCuserDto {
  @ApiProperty({ default: '18108370361' })
  @IsMobilePhone('zh-CN')
  @IsNotEmpty()
  phoneNum: string;
}
