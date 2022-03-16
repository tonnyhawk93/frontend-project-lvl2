import { createFileObject, compareObjects } from './lib.js';
import { stylish } from './formaters/index.js';

export default (filepath1, filepath2, formater = stylish) => {
  const obj1 = createFileObject(filepath1);
  const obj2 = createFileObject(filepath2);
  const diff = compareObjects(obj1, obj2);
  return formater(diff);
};
