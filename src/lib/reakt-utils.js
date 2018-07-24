export const isFunction = (anyType) => typeof anyType === 'function';

export const isClass = (anyType) =>
  isFunction(anyType) && /^class/.test(anyType.toString())

export const isString = (anyType) => typeof anyType === 'string';

export const isEvent = (propName) => /^on/.test(propName);
