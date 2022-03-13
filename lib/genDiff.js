import { createFileObject, compareObjects } from './lib.js';

export default (filepath1, filepath2) => {
  const obj1 = createFileObject(filepath1);
  const obj2 = createFileObject(filepath2);
  return compareObjects(obj1, obj2);
};
