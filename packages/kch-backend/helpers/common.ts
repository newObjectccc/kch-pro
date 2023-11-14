import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ERROR_MAP } from 'dictionary';
import { PaginationDto } from 'src/to-buser/dto/find-to-buser.dto';
import { Repository } from 'typeorm';

export async function hashPassword(password: string) {
  let result = null;
  const salt = await bcrypt.genSalt(10);
  result = await bcrypt.hash(password, salt);
  return result;
}

export async function comparePassword(password: string, hash: string) {
  let result = null;
  result = await bcrypt.compare(password, hash);
  return result;
}

export async function findListByPagination<T extends PaginationDto>(
  params: T,
  repo: Repository<any>
) {
  const { pageNo, pageSize: take, ...restParams } = params ?? {};
  if (!pageNo || !take) throw new HttpException(ERROR_MAP.get('PAGINATION_INVALID'), 201);
  return await repo.find({ skip: (pageNo - 1) * take, take, where: restParams });
}

export async function getTypeString(val: any) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

export async function isEmptyObject(obj: any) {
  try {
    if ((await getTypeString(obj)) === 'Object' && JSON.stringify(obj) === '{}') return true;
  } catch {}
  return false;
}
