import isObject from './util.js';

const repeatSpace = (count) => ' '.repeat(count);

const stylish = (obj, spaces = 2) => {
  const styledArr = Object.entries(obj).reduce((result, [key, value]) => {
    if (isObject(value)) {
      result.push(`${repeatSpace(spaces + 2)}${key}: ${stylish(value, spaces + 4)}\n`);
    } else if (Array.isArray(value)) {
      const arr = value.map(({ type, value: val }) => `${repeatSpace(spaces)}${type} ${key}: ${isObject(val) ? stylish(val, spaces + 4) : val}\n`);
      result.push(arr.join(''));
    } else {
      result.push(`${repeatSpace(spaces + 2)}${key}: ${value}\n`);
    }

    return result;
  }, []);
  styledArr.unshift('{\n');
  styledArr.push(repeatSpace(spaces - 2));
  styledArr.push('}');
  return styledArr.join('');
};

export default stylish;
