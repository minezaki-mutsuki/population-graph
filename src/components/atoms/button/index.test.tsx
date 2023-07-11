import { fireEvent, render } from '@testing-library/react';
import { Button } from '.';

test('最初にクリックしてonClickOFFが呼ばれ、2回目のクリックでonClickONが呼ばれる', async () => {
  const onClickOFF = jest.fn();
  const onClickON = jest.fn();
  const { getByRole } = render(
    <Button
      onClick={(isChecked) => (isChecked ? onClickON() : onClickOFF())}
      text="Example"
    />
  );
  const button = getByRole('button');
  fireEvent.click(button);
  expect(onClickOFF).toHaveBeenCalled();
  fireEvent.click(button);
  expect(onClickON).toHaveBeenCalled();
});
