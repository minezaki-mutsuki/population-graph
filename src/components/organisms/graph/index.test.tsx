import { render } from '@testing-library/react';
import { Graph } from '../graph';

test('コンポーネントが正しく描画されること', () => {
  const populationData = [
    {
      type: 'line',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      name: '都道府県1',
    },
  ];

  render(<Graph populationData={populationData} />);
});
