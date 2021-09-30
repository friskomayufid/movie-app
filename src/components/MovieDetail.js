import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MovieDetail({ detail }) {
  return (
    <MovieContainer>
      <Link to="/">
        <Button>Back to List</Button>
      </Link>
      <Image src={detail.Poster} alt={detail.Title}></Image>
      <Title>{detail.Title}</Title>
      <Desc>
        Year : {detail.Year} || Type: {detail.Type}
      </Desc>
      <Desc>Awards : {detail.Awards}</Desc>
      <Desc>Actors : {detail.Actors}</Desc>
      <Desc>Plot : {detail.Plot}</Desc>
    </MovieContainer>
  );
}

const Button = styled.button`
  background-color: cornflowerblue;
  font-size: 20px;
  padding: 12px;
  color: white;
  margin-left: 11px;
  border: none;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
`;

const MovieContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;
const Image = styled.img`
  margin-top: 30px;
  width: 300px;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;
const Desc = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  cursor: pointer;
`;
