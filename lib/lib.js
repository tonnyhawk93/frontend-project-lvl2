import { readFileSync } from 'fs';
import { extname } from 'path';
import _ from 'lodash';
import parser from './parser.js';

export const createFileObject = (path) => {
  const file = readFileSync(path, 'utf8');
  const extension = extname(path);
  return parser(file, extension);
};

const formatDiff = (arr) => `{\n${arr.join('\n')}\n}`;

export const compareObjects = (object1, object2) => {
  const keys = _.sortBy(_.uniq([...Object.keys(object1), ...Object.keys(object2)]));

  const result = keys.reduce((acc, key) => {
    if (object1[key] !== object2[key]) {
      if (Object.hasOwn(object1, key)) {
        acc.push(`  - ${key}: ${object1[key]}`);
      }
      if (Object.hasOwn(object2, key)) {
        acc.push(`  + ${key}: ${object2[key]}`);
      }
    } else {
      acc.push(`    ${key}: ${object1[key]}`);
    }

    return acc;
  }, []);

  return formatDiff(result);
};
