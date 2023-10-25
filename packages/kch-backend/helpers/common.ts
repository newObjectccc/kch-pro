import * as bcrypt from 'bcrypt';

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
