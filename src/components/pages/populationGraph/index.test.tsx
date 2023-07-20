import { PopulationDataAllType } from '.';
import { onCreatePopulationData } from './models/onCreatePopulationData';
import { onDeletePrefecture } from './models/onDeletePrefecture';

test('populationDataAllから正しいデータを抽出して新しいデータの配列を返す', () => {
  const mockPopulationDataAll: PopulationDataAllType[] = [
    {
      id: 1,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県1' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県1' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県1' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県1' },
      },
    },
    {
      id: 2,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県2' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県2' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県2' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県2' },
      },
    },
  ];

  // allの場合のデータを確認
  const resultAll = onCreatePopulationData('all', mockPopulationDataAll);
  expect(resultAll).toEqual([
    { type: 'line', data: [1, 2, 3], name: '都道府県1' },
    { type: 'line', data: [1, 2, 3], name: '都道府県2' },
  ]);

  // 'young'の場合のデータを確認
  const resultYoung = onCreatePopulationData('young', mockPopulationDataAll);
  expect(resultYoung).toEqual([
    { type: 'line', data: [4, 5, 6], name: '都道府県1' },
    { type: 'line', data: [4, 5, 6], name: '都道府県2' },
  ]);

  // 'adult'の場合のデータを確認
  const resultAdult = onCreatePopulationData('adult', mockPopulationDataAll);
  expect(resultAdult).toEqual([
    { type: 'line', data: [7, 8, 9], name: '都道府県1' },
    { type: 'line', data: [7, 8, 9], name: '都道府県2' },
  ]);

  // 'old'の場合のデータを確認
  const resultOld = onCreatePopulationData('old', mockPopulationDataAll);
  expect(resultOld).toEqual([
    { type: 'line', data: [10, 11, 12], name: '都道府県1' },
    { type: 'line', data: [10, 11, 12], name: '都道府県2' },
  ]);
});

test('指定したidの要素が削除された新しい配列を返す', () => {
  const mockPopulationDataAll: PopulationDataAllType[] = [
    {
      id: 1,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県1' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県1' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県1' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県1' },
      },
    },
    {
      id: 2,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県2' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県2' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県2' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県2' },
      },
    },
    {
      id: 3,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県3' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県3' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県3' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県3' },
      },
    },
  ];

  // id=2の要素を削除した新しい配列を確認
  const result = onDeletePrefecture(2, mockPopulationDataAll);
  expect(result).toEqual([
    {
      id: 1,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県1' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県1' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県1' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県1' },
      },
    },
    {
      id: 3,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県3' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県3' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県3' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県3' },
      },
    },
  ]);
});
