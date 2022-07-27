import Options from '../Options';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils/test-utils';
import OrderEntry from '../OrderEntry';

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

test('update topping subtotal when toppings change', async () => {
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

test('grand total updates properly if scoop is added first', async () => {
  render(<OrderEntry />);
  const grandTotal = screen.getByText('Grand total: $', { exact: false });

  expect(grandTotal).toHaveTextContent('0.00');

  const scoopsInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  userEvent.clear(scoopsInput);
  userEvent.type(scoopsInput, '2');
  expect(grandTotal).toHaveTextContent('4.00');
});
test('grand total updates properly if topping is added first', async () => {
  render(<OrderEntry />);
  const grandTotal = screen.getByText('Grand total: $', { exact: false });
  const toppingsInput = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });
  userEvent.click(toppingsInput);
  expect(grandTotal).toHaveTextContent('1.50');
});
test('grand total updates properly if item is removed ', async () => {
  render(<OrderEntry />);

  const grandTotal = screen.getByText('Grand total: $', { exact: false });

  const scoopsInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });

  const toppingsInput = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });

  userEvent.clear(scoopsInput);

  userEvent.type(scoopsInput, '2');

  userEvent.click(toppingsInput);

  expect(grandTotal).toHaveTextContent('5.50');

  userEvent.clear(scoopsInput);

  userEvent.type(scoopsInput, '1');

  expect(grandTotal).toHaveTextContent('3.50');

  userEvent.click(toppingsInput);

  expect(grandTotal).toHaveTextContent('2.00');
});
