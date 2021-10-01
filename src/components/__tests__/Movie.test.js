import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Movie from '../Movie';

const data = {
  Poster: 'f1.jpg',
  Title: 'Drive to survive',
  imdbID: 'id123',
  Year: '2021',
  Type: 'Movie',
};

test('renders without crash', () => {
  render(
    <BrowserRouter>
      <Movie movie={data} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Year: 2021 | Type: Movie/i);
  expect(linkElement).toBeInTheDocument();
});

test('displayes a title', async () => {
  const movie = render(
    <BrowserRouter>
      <Movie movie={data} />
    </BrowserRouter>
  );
  const movieTitle = await movie.findByTestId('title');

  expect(movieTitle.textContent).toContain('Drive to survive');
});

test('displayes a poster', async () => {
  const movie = render(
    <BrowserRouter>
      <Movie movie={data} />
    </BrowserRouter>
  );
  const moviePoster = await movie.findByTestId('poster');

  expect(moviePoster.src).toContain('f1.jpg');
});

test('displayes a desc', async () => {
  const movie = render(
    <BrowserRouter>
      <Movie movie={data} />
    </BrowserRouter>
  );
  const movieDesc = await movie.findByTestId('desc');

  expect(movieDesc.textContent).toContain('2021');
});
