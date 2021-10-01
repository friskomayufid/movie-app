import { render } from '@testing-library/react';
import SearchMovie from '../SearchMovie';

const data = [
  {
    Poster: 'f1.jpg',
    Title: 'Drive to survive',
    imdbID: 'id123',
    Year: '2021',
    Type: 'Movie',
    Actor: 'Max',
    Plot: 'Racing',
  },
];

test('render search', async () => {
  const movie = render(
    <SearchMovie handleChange={() => {}} handleSearch={() => {}} />
  );
  const title = await movie.findByTestId('search');
  expect(title).toHaveProperty('type');
});
