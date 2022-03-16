import isObject from '../util.js';

const addQuotes = (val) => (typeof val === 'string' ? `'${val}'` : val);
const formatValue = (val) => (isObject(val) ? '[complex value]' : addQuotes(val));

const plain = (obj, path = []) => {
  const result = Object.entries(obj).map(([key, [first, last]]) => {
    const currentPath = [...path, key];
    const startOfMessage = `Property '${currentPath.join('.')}' was`;
    const { type: type1, value: value1 } = first;

    if (first && last) {
      const { value: value2 } = last;
      return `${startOfMessage} updated. From ${formatValue(value1)} to ${formatValue(value2)}`;
    } if (type1 === '-') {
      return `${startOfMessage} removed`;
    } if (type1 === '+') {
      return `${startOfMessage} added with value: ${formatValue(value1)}`;
    } if (type1 === ' ' && isObject(value1)) {
      return plain(value1, currentPath);
    }
    return '';
  });
  return result.filter((str) => str !== '').join('\n');
};

export default plain;
