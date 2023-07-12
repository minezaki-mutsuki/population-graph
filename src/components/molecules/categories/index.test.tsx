import { fireEvent, render } from '@testing-library/react';
import { Categories } from '../categories';

test('カテゴリボタンをクリックした際に正しいコールバックが呼ばれること', () => {
  const onChangeMock = jest.fn();

  const { getByText } = render(<Categories onChange={onChangeMock} />);

  const allButton = getByText('総人口');
  fireEvent.click(allButton);
  expect(onChangeMock).toHaveBeenCalledWith('all');

  const youngButton = getByText('年少人口');
  fireEvent.click(youngButton);
  expect(onChangeMock).toHaveBeenCalledWith('young');

  const adultButton = getByText('生産年齢人口');
  fireEvent.click(adultButton);
  expect(onChangeMock).toHaveBeenCalledWith('adult');

  const oldButton = getByText('老年人口');
  fireEvent.click(oldButton);
  expect(onChangeMock).toHaveBeenCalledWith('old');
});
