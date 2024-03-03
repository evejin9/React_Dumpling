import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #5A80C9;
  color: #fff;
  border: 3px solid #fff;
  font-size: 15px;
  padding: 15px 30px;
  border-radius: 25px;
  margin: 5px;

  &:hover {
  background-color: #fff;
  color: #5A80C9;
  border: 3px solid #5A80C9;
  font-size: 15px;
  padding: 15px 30px;
  border-radius: 25px;
  margin: 5px;
  }
`

function Button(props) {
  const { text } = props;
  return (
    <Btn className='cursor-pointer'>
      {text}
    </Btn>
  );
}

export default Button;