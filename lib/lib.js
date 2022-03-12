import { readFileSync } from 'fs';
import { resolve } from 'path';
import _ from 'lodash';

export const createFileObject = (path) => {
  const fileObject = readFileSync(resolve(process.cwd(), path), 'utf8');
  return JSON.parse(fileObject);
};

const formatDiff = (arr) => `{\n${arr.join('\n')}\n}`;

export const compareObjects = (object1, object2) => {
  const result = [];
  const keys = _.sortBy(_.uniq([...Object.keys(object1), ...Object.keys(object2)]));

  for (const key of keys) {
    if (Object.hasOwn(object1, key) && Object.hasOwn(object2, key) && object1[key] === object2[key]) {
      result.push(`    ${key}: ${object1[key]}`);
      continue;
    }
    if (Object.hasOwn(object1, key)) {
      result.push(`  - ${key}: ${object1[key]}`);
    }
    if (Object.hasOwn(object2, key)) {
      result.push(`  + ${key}: ${object2[key]}`);
    }
  }
  return formatDiff(result);
};
