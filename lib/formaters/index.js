import stylish from './stylish.js';
import plain from './plain.js';

const formaters = { stylish, plain };
const selectFormaterByName = (formatName) => formaters[formatName];

export { stylish, plain, selectFormaterByName };
