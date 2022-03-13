import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../lib/genDiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');

const correctDiff1 = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const correctDiff2 = `{
    follow: false
    host: hexlet.io
    proxy: 123.234.53.22
    timeout: 50
}`;

describe('genDiff', () => {
  it('Возращает правильный diff у разных файлов', () => {
    expect(genDiff(filepath1, filepath2)).toEqual(correctDiff1);
  });
  it('Возращает правильный diff у одинаковых файлов', () => {
    expect(genDiff(filepath1, filepath1)).toEqual(correctDiff2);
  });
});
