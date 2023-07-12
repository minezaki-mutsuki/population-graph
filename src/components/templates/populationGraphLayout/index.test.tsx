import { render } from '@testing-library/react';
import { PopulationGraphLayout } from '../populationGraphLayout';

test('コンポーネントが正しく描画されること', () => {
  const onChangeMock = jest.fn();
  const onClickMock = jest.fn();

  const populationData = [
    {
      type: 'line',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      name: '都道府県1',
    },
  ];

  const items = [
    { id: '1', text: 'ボタン1' },
    { id: '2', text: 'ボタン2' },
  ];

  render(
    <PopulationGraphLayout
      onChange={onChangeMock}
      populationData={populationData}
      items={items}
      onClick={onClickMock}
    />
  );
});
