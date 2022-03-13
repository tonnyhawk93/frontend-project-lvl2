import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../lib/genDiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFilepath1 = getFixturePath('file1.json');
const jsonFilepath2 = getFixturePath('file2.json');
const yamlFilepath1 = getFixturePath('file1.yaml');
const yamlFilepath2 = getFixturePath('file2.yaml');
const ymlFilepath1 = getFixturePath('file1.yml');
const ymlFilepath2 = getFixturePath('file2.yml');

describe('genDiff', () => {
  it('Возращает правильный diff у разных json файлов', () => {
    expect(genDiff(jsonFilepath1, jsonFilepath2)).toMatchSnapshot();
  });
  it('Возращает правильный diff у одинаковых json файлов', () => {
    expect(genDiff(jsonFilepath1, jsonFilepath1)).toMatchSnapshot();
  });
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
});
