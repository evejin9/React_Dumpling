import React from 'react';
import styled from 'styled-components';
import { BsSearch as SearchIcon } from "react-icons/bs";

const SearchLabel = styled.label`
  position: relative;
  padding: 20px;
  
  input {
    width: 400px;
    height: 40px;
    font-size: 16px;
    border-radius: 20px;
    border: 3px solid #535252;
    outline: none;
    padding: 0 60px;
    box-sizing: border-box;
  }
`;

const NewSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 40px;
  bottom: 32px;
`;

function Search(props) {
  return (
    <SearchLabel>
      <NewSearchIcon />
      <input placeholder='지역 및 식당 또는 제품명'/>
    </SearchLabel>
  );
}

export default Search;