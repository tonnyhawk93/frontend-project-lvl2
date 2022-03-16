import { readFileSync } from 'fs';
import { extname } from 'path';
import _ from 'lodash';
import parser from './parser.js';
import isObject from './util.js';

export const createFileObject = (path) => {
  const file = readFileSync(path, 'utf8');
  const extension = extname(path);
  return parser(file, extension);
};

export const compareObjects = (a, b) => {
  const keys = _.sortBy(_.uniq([...Object.keys(a), ...Object.keys(b)]));

  return keys.reduce((result, key) => {
    if (a[key] === b[key]) {
      return { ...result, [key]: [{ value: a[key], type: ' ' }] };
    } if (isObject(a[key]) && isObject(b[key])) {
      return { ...result, [key]: [{ value: compareObjects(a[key], b[key]), type: ' ' }] };
    }
    if (key in a && key in b) {
      return { ...result, [key]: [{ value: a[key], type: '-' }, { value: b[key], type: '+' }] };
    } if (key in a) {
      return { ...result, [key]: [{ value: a[key], type: '-' }] };
    }
    return { ...result, [key]: [{ value: b[key], type: '+' }] };
  }, {});
};
