import isObject from '../util.js';

const repeatSpace = (count) => ' '.repeat(count);

const stylish = (obj, spaces = 2) => {
  const styledArr = Object.entries(obj).reduce((result, [key, value]) => {
    if (isObject(value)) {
      return [...result, `${repeatSpace(spaces + 2)}${key}: ${stylish(value, spaces + 4)}\n`];
    } if (Array.isArray(value)) {
      const arr = value.map(({ type, value: val }) => `${repeatSpace(spaces)}${type} ${key}: ${isObject(val) ? stylish(val, spaces + 4) : val}\n`);
      return [...result, arr.join('')];
    }
    return [...result, `${repeatSpace(spaces + 2)}${key}: ${value}\n`];
  }, []);
  return ['{\n', ...styledArr, repeatSpace(spaces - 2), '}'].join('');
};

export default stylish;
