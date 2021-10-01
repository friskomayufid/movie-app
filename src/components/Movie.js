import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Movie({ movie, handlePoster, lastIndex }) {
  return (
    <MovieContainer ref={lastIndex} data-testid="movie-container">
      <Image
        src={movie.Poster}
        alt={movie.Title}
        onClick={() => handlePoster(movie.Poster)}
        data-testid="poster"
      ></Image>
      <Link to={`/details/${movie.imdbID}`}>
        <Title data-testid="title">{movie.Title}</Title>
        <Desc data-testid="desc">
          Year : {movie.Year} || Type: {movie.Type}
        </Desc>
      </Link>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;
const Image = styled.img`
  width: 300px;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;
const Desc = styled.p`
  font-size: 20px;
  cursor: pointer;
`;
