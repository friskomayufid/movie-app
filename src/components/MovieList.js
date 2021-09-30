import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';

export default function MovieList({ movies, handlePoster }) {
  return (
    <>
      {!movies.length ? (
        <MovieContainer>
          <Title>No Movie Found</Title>
        </MovieContainer>
      ) : (
        movies.map((movie, index) => {
          return (
            <Movie key={index} movie={movie} handlePoster={handlePoster} />
          );
        })
      )}
    </>
  );
}

const MovieContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;
