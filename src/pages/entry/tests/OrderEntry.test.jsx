import { server } from '../../../mocks/server';
import { rest } from 'msw';
import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

test('error handlings for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3000/scoops', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
    rest.get('http://localhost:3000/toppings', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
  );

  render(<OrderEntry />, { wrapper: OrderDetailsProvider });

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');

    expect(alerts).toHaveLength(2);
  });
});
