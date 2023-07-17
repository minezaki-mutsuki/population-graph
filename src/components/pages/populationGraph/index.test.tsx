import { onCreatePopulationData } from './models/onCreatePopulationData';
import { onDeletePrefecture } from './models/onDeletePrefecture';

test('onCreatePopulationData関数がstateを更新する', () => {
  const populationDataAll = [
    {
      id: 1,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県1' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県1' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県1' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県1' },
      },
    },
  ];
  const setPopulationDataMock = jest.fn();
  onCreatePopulationData('all', populationDataAll, setPopulationDataMock);
  expect(setPopulationDataMock).toHaveBeenCalledWith([
    {
      type: 'line',
      data: [1, 2, 3],
      name: '都道府県1',
    },
  ]);

  onCreatePopulationData('young', populationDataAll, setPopulationDataMock);
  expect(setPopulationDataMock).toHaveBeenCalledWith([
    {
      type: 'line',
      data: [4, 5, 6],
      name: '都道府県1',
    },
  ]);

  onCreatePopulationData('adult', populationDataAll, setPopulationDataMock);
  expect(setPopulationDataMock).toHaveBeenCalledWith([
    {
      type: 'line',
      data: [7, 8, 9],
      name: '都道府県1',
    },
  ]);

  onCreatePopulationData('old', populationDataAll, setPopulationDataMock);
  expect(setPopulationDataMock).toHaveBeenCalledWith([
    {
      type: 'line',
      data: [10, 11, 12],
      name: '都道府県1',
    },
  ]);
});

test('onDeletePrefectureがデータを削除し、stateを更新する', () => {
  const id = 1;
  const populationDataAll = [
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

  const setPopulationDataAllMock = jest.fn();
  onDeletePrefecture(id, populationDataAll, setPopulationDataAllMock);
  expect(setPopulationDataAllMock).toHaveBeenCalledWith([
    {
      id: 2,
      data: {
        all: { type: 'line', data: [1, 2, 3], name: '都道府県2' },
        young: { type: 'line', data: [4, 5, 6], name: '都道府県2' },
        adult: { type: 'line', data: [7, 8, 9], name: '都道府県2' },
        old: { type: 'line', data: [10, 11, 12], name: '都道府県2' },
      },
    },
  ]);
});
