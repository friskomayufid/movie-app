import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieList from '../MovieList';

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

test('display no data when empty', async () => {
  const movie = render(
    <BrowserRouter>
      <MovieList movies={[]} />
    </BrowserRouter>
  );
  const title = await movie.findByTestId('no-data');
  expect(title.textContent).toContain('No Movie Found');
});

test('display list data', async () => {
  const movie = render(
    <BrowserRouter>
      <MovieList movies={data} />
    </BrowserRouter>
  );
  const title = await movie.findByTestId('title');
  expect(title.textContent).toContain('Drive to survive');
});
