import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../lib/genDiff';
import { plain, json } from '../lib/formaters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const yamlFilepath1 = getFixturePath('file1.yaml');
const yamlFilepath2 = getFixturePath('file2.yaml');
const ymlFilepath1 = getFixturePath('file1.yml');
const ymlFilepath2 = getFixturePath('file2.yml');
const jsonComplicatedFile1 = getFixturePath('complicatedFile1.json');
const jsonComplicatedFile2 = getFixturePath('complicatedFile2.json');

describe('genDiff', () => {
  it('Возращает правильный diff у разных yaml файлов', () => {
    expect(genDiff(yamlFilepath1, yamlFilepath2)).toMatchSnapshot();
  });
  it('Возращает правильный diff у одинаковых yaml файлов', () => {
    expect(genDiff(yamlFilepath1, yamlFilepath1)).toMatchSnapshot();
  });
  it('Возращает правильный diff у разных yml файлов', () => {
    expect(genDiff(ymlFilepath1, ymlFilepath2)).toMatchSnapshot();
  });
  it('Возращает правильный diff у одинаковых yml файлов', () => {
    expect(genDiff(ymlFilepath1, ymlFilepath1)).toMatchSnapshot();
  });
  it('Возращает правильный diff у сложных json файлов', () => {
    expect(genDiff(jsonComplicatedFile1, jsonComplicatedFile2)).toMatchSnapshot();
  });
  it('Правильно работает плоское форматирование у сложных json файлов', () => {
    expect(genDiff(jsonComplicatedFile1, jsonComplicatedFile2, plain)).toMatchSnapshot();
  });
  it('Правильно работает json форматер у файлов', () => {
    expect(genDiff(jsonComplicatedFile1, jsonComplicatedFile2, json)).toMatchSnapshot();
  });
});
