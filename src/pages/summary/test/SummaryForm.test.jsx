import { SummaryForm } from '../SummaryForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const checkboxLabel = 'I agree to Terms and Conditions';

test('checkbox init unchecked', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: checkboxLabel });
  const submitButton = screen.getByRole('button', { name: /confirm order/i });

  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});

test('checkbox check enable button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: checkboxLabel });
  const submitButton = screen.getByRole('button', { name: /confirm order/i });

  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});
