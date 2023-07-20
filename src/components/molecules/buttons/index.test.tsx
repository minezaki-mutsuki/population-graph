import { fireEvent, render } from '@testing-library/react';
import { Buttons } from './index';

test('クリック時に引数を確認しつつ適切なコールバックが呼ばれること', () => {
  const onClickMock = jest.fn();

  const items = [...Array(20)].map((_, i) => ({
    id: i,
    text: `都道府県${i}`,
  }));

  const { getByText } = render(<Buttons items={items} onClick={onClickMock} />);

  items.forEach((item) => {
    const button = getByText(item.text);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledWith(false, item.id);
  });
});
