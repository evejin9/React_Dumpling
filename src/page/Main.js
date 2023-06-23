import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  padding: 30px;
`;

const Dumpling = styled.section`
  padding: 30px;
  background-color: #000;
`;

function Main(props) {
  return (
    <MainWrapper>
      <Dumpling>
        ㅎㅇ
      </Dumpling>
    </MainWrapper>
  );
}

export default Main; 