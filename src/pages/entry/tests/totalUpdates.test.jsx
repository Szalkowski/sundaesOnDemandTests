import Options from '../Options';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils/test-utils';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType={'scoops'} />);
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

  expect(scoopsSubtotal).toHaveTextContent('2.00');

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');

  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('update tooping subtotal when toopings change', async () => {
  render(<Options optionType={'toppings'} />);

  const toppingsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  });

  const cherriesCheckbox = await screen.findByLabelText('Cherries');

  const hotFudgeCheckbox = await screen.findByLabelText('Hot Fudge');

  await userEvent.click(cherriesCheckbox);

  expect(toppingsSubtotal).toHaveTextContent('1.50');

  await userEvent.click(hotFudgeCheckbox);

  expect(toppingsSubtotal).toHaveTextContent('3.00');

  await userEvent.click(hotFudgeCheckbox);

  expect(toppingsSubtotal).toHaveTextContent('1.50');
});
