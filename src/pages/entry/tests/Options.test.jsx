import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop', async () => {
  render(<Options optionType={'scoops'} />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display image for each tooping', async () => {
  render(<Options optionType={'toopings'} />);

  const toopingImages = await screen.findAllByRole('img', {
    name: /tooping$/i,
  });
  expect(toopingImages).toHaveLength(3);

  const altTexts = toopingImages.map((element) => element.alt);
  expect(altTexts).toEqual([
    'Cherries tooping',
    'M&Ms tooping',
    'Hot Fudge tooping',
  ]);
});
