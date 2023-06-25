import React from 'react';
import styled from 'styled-components';

import dumplingBg from '../image/dumpling_bg.jpg';
import searchStoreBg from '../image/search-view_bg.jpg';
import Search from '../components/ui/Search';
import Button from '../components/ui/Button';

const MainWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .copyright h2 {
    padding: 20px;
    font-size: 45px;
    font-weight: 600;
    line-height: 70px;
  }

  .copyright p {
    padding: 20px;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
  }
  `;

const Dumpling = styled.section`
  color: #fff;
  padding: 30px;
  background-color: #000;

  .copyright h2 {
    width: 350px;
  }

  .copyright p {
    width: 434px;
  }

  img {
    width: 600px;
    height: 380px;
    padding: 20px;
    margin: 20px;
  }
`;

const SearchStore = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &::after {
    content: "";
    opacity: 0.5;
    position: absolute;
    background-image: url(${searchStoreBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const YoutubeShare = styled.div`
  padding: 30px;

`;

function Main(props) {
  return (
    <MainWrapper>
      <Dumpling>
        <div className='dumpling copyright'>
          <h2>만두, 어디까지 먹어봤니?</h2>
          <p>만두를 사랑하는 당신을 위해 준비한 만두 도장깨기 서비스</p>
          <img src={dumplingBg} />
        </div>
      </Dumpling>
    <SearchStore>
        <div className='searchStore copyright'>
          <h2>만두를 찾으시나요?</h2>
          <p>모두가 좋아할 만두, 바로 여기에 있습니다.</p>
        </div>
        <Search />
    </SearchStore>
    <YoutubeShare>
      <div className='copyright'>
        <h2>여기라면 당신이 좋아할만두..?</h2>
        <p>당신의 최애 맛집을 소개해주세요</p>
        <Button text={'공유하기'} />
      </div>
    </YoutubeShare>
    </MainWrapper>
  );
}

export default Main; 