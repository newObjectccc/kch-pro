import { IntersectionType } from '@nestjs/swagger';
import { PaginationDto } from 'src/to-buser/dto/find-to-buser.dto';

export class FindBroleDto {
  name?: string;
  pid?: number;
  id?: number;
}

export class FindListBroleDto extends IntersectionType(PaginationDto, FindBroleDto) {}
