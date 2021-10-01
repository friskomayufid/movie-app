import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieDetail from '../MovieDetail';

const data = {
  Poster: 'f1.jpg',
  Title: 'Drive to survive',
  imdbID: 'id123',
  Year: '2021',
  Type: 'Movie',
  Actor: 'Max',
  Plot: 'Racing'
};

test('displayes a poster', async () => {
  const movie = render(
    <BrowserRouter>
      <MovieDetail detail={data} />
    </BrowserRouter>
  );
  const movieTitle = await movie.findByTestId('poster');

  expect(movieTitle.src).toContain('f1.jpg');
});
