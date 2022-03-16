import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formaters = { stylish, plain, json };
const selectFormaterByName = (formatName) => formaters?.[formatName] || stylish;

export {
  stylish, plain, json, selectFormaterByName,
};
