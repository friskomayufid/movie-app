import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function SearchMovie({ handleChange, handleSearch, movie }) {
  // const  = useSelector((state) => state.movie);

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search Movie"
        onChange={handleChange}
        value={movie}
        data-testid="search"
      ></Input>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  text-align: center;
`;
const Input = styled.input`
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`;
