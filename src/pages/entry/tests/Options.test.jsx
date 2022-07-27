import Options from '../Options';
import { render, screen } from '../../../test-utils/test-utils';

test('displays image for each scoop', async () => {
  render(<Options optionType={'scoops'} />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display image for each topping', async () => {
  render(<Options optionType={'toppings'} />);

  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const altTexts = toppingImages.map((element) => element.alt);
  expect(altTexts).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot Fudge topping',
  ]);
});
