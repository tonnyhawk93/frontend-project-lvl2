import genDiff from '../lib/genDiff';

const filepath1 = './__tests__/files/file1.json';
const filepath2 = './__tests__/files/file2.json';

const correctDiff =
`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

describe('genDiff', () => {
  it('Возращает правильный diff', () => {
    expect(genDiff(filepath1, filepath2)).toEqual(correctDiff);
  });
});
