export const typeToString = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};

export const isValidString = (str) => {
  return typeToString(str) === 'string' && str !== '';
};

export const isNullOrUndefined = (val) => {
  return val === void 0 || val === null;
};

export const isValidValue = (val) => {
  if (isNullOrUndefined(val)) return false;
  if (typeToString(val) === 'string') return isValidString(val);
  if (typeToString(val) === 'number') return isValidNumber(val);
  if (typeToString(val) === 'object') return !isEmptyObject(val);
  if (typeToString(val) === 'array') return !isEmptyArray(val);
  return true;
};

export const isEmptyObject = (obj) => {
  if (typeToString(obj) !== 'object') return false;
  if (obj.toString() !== '{}') return false;
  return true;
};

export const isEmptyArray = (arr) => {
  if (typeToString(arr) !== 'array') return false;
  if (arr.filter((i) => i).length <= 0) return false;
  return true;
};

export const isValidNumber = (num) => {
  const normalizedNum = parseInt(num);
  return typeToString(normalizedNum) === 'number' && !Number.isNaN(normalizedNum);
};

export const isValidNumberStrict = (num) => {
  return typeToString(num) === 'number' && !Number.isNaN(num);
};

export const isBiggerThan1 = (val) => {
  const normalized = parseInt(val);
  if (!isValidNumber(normalized)) return false;
  if (normalized <= 1) return false;
  return true;
};

export const isBiggerOrEqualThan1 = (val) => {
  const normalized = parseInt(val);
  if (isNaN(normalized)) return false;
  if (normalized < 1) return false;
  return true;
};

export const isChinaLandMobile = (str) => {
  if (!isValidNumber(str) || !isValidString(str)) return false;
  return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str);
};
