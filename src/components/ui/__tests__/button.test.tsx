import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

test('renders button text and handles click', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  // find the button by its text
  const btn = screen.getByRole('button', { name: /click me/i });

  // click it
  await user.click(btn);

  // check text and click behavior
  expect(btn).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
