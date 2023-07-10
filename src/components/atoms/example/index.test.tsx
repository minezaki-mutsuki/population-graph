import { render, screen } from '@testing-library/react';
import { Example } from '.';
import userEvent from '@testing-library/user-event';

test('クリックしてonClickが呼ばれる', async () => {
  const onClick = jest.fn();
  render(<Example onClick={onClick} />);
  await userEvent.click(screen.getByText('Example'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
