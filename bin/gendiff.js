#!/usr/bin/env node

import { Command } from 'commander';
import { resolve } from 'path';
import genDiff from '../lib/genDiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const absoluteFilePath1 = resolve(process.cwd(), filepath1);
    const absoluteFilePath2 = resolve(process.cwd(), filepath2);
    const diff = genDiff(absoluteFilePath1, absoluteFilePath2);
    /* eslint-disable no-console */
    console.log(diff);
    /* eslint-enable no-console */
  })
  .parse(process.argv);
