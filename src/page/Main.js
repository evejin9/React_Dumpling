import React, { useState } from 'react';
import styled from 'styled-components';
import YouTube from "react-youtube";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dumplingBg from '../image/dumpling_bg.jpg';
import searchStoreBg from '../image/search-view_bg.jpg';
import Search from '../components/ui/Search';
import Button from '../components/ui/Button';
import MapImg from '../image/map.jpg';
import deliveryBg from '../image/delivery-bg.jpg';
import deliveryBM from '../image/delivery-service-1.png';
import deliveryYGY from '../image/delivery-service-2.png';
import deliveryCP from '../image/delivery-service-3.png';

import { getStores } from '../api/StoreApi';
import { allStoreList, getStoreData, storeList } from '../features/StoreSlice';

import NewStoreSwiper from '../components/NewStoreSwiper';
import BestStoreSwiper from '../components/BestStoreSwiper';



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

  .copyright h3 {
    padding: 20px;
    font-size: 30px;
    font-weight: 600;
    line-height: 70px;
    word-wrap: break-word;
  }

  .copyright p {
    padding: 20px;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
  }

  .title {
    font-size: 30px;
    font-weight: 600;
    padding: 30px;
    line-height: 30px;

    display: flex;
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

const SearchStore = styled.section`
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

const YoutubeShare = styled.section`
  padding: 50px;

  .textArea {
    margin-bottom: 50px;
  }
`;

const NewMap = styled.section`
  background-color: #F3F7FF;
  padding: 40px;

`;

const Map = styled.div`
  .mapItem {
    display: flex;
    /* justify-content: center;
    align-items: center; */

    .copyright {
      width: 400px;
      /* flex: 2; */
    }

    img {
      flex: 1;
      /* padding: 30px; */
    }
  }
`

const BestProduct = styled.section`
  padding: 40px;
`;

const ProductReview = styled.div`

  ul {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
  }

  li {
    font-size: 20px;
    margin-left: 20px;
  }
`;

const Delivery = styled.section`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &::after {
    content: "";
    opacity: 0.5;
    position: absolute;
    background-image: url(${deliveryBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    z-index: -1;
  }

  .deliverImg {
    margin-top: 30px;
    display: flex;
    
    img {
      width: 100px;
      border-radius: 10px;
    }

    img + img { 
      margin-left: 20px;
    }
  }
`; 


function Main(props) {
  const [newStoreList, setNewStoreList] = useState([]);
  const [bestStoreList, setBestStoreList] = useState([]);

  const dispatch = useDispatch();
  const storeList = useSelector(allStoreList);

  useEffect(() => {
    const handleGetStoreData = async () => {
      const result = await getStores();

      if (!result) return 

      dispatch(getStoreData(result))
    }

    handleGetStoreData();
  }, [])

  useEffect(() => {
    const newStore = [...storeList];
    const newStoreArray = newStore.sort((a, b) => { if (a.date > b.date) return -1; })
    .slice(0, 4);
    
    const bestStore = [...storeList];
    const bestStoreArray = bestStore.sort((a, b) => { if (a.likeCount > b.likeCount) return -1; })
    .slice(0, 4);

    setNewStoreList(newStoreArray);
    setBestStoreList(bestStoreArray);

  }, [storeList])

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
      <div className='textArea'>
        <div className='copyright'>
          <h2>여기라면 당신이 좋아할만두..?</h2>
          <p>당신의 최애 맛집을 소개해주세요</p>
        </div>
        <Button text={'공유하기'} />
      </div>

      <YouTube
          // videoId={'NC1TUOCFChk'}
          videoId={'PXXkK1aVxrU'}
          opts={{
            width: "100%",
            height: "500px",
            playerVars: {
              autoplay: 1,
              loop: 1,
              playlist: 'PXXkK1aVxrU',
              // modestbranding: 1,
            },
          }}
          onReady={e=> {
            e.target.mute(); 
          }}
      />
    </YoutubeShare>

    <NewMap>
      <div className='New'>
        <div className='title'>
          <p>NEW</p>
        </div>
        <NewStoreSwiper newStore={newStoreList} />
      </div>

      <Map>
        <div className='title'>
          <p>MAP</p>
        </div>
        <div className='mapItem'>
          <div className='copyright'>
            <h3>만두 러버들이 인증한 만두 로드랩</h3>
            <Button text={'만두깨기 로드맵'} />
          </div>
          <img src={MapImg} />
        </div>
      </Map>
    </NewMap>
    
    <BestProduct>
      <div className='best'>
        <div className='title'>
            <p>BEST</p>
        </div>
      <BestStoreSwiper bestStore={bestStoreList}  />
      </div>

      <ProductReview>
        <div className='title'>
            <p>PRODUCT REVIEW</p>
        </div>

        <div>
          {/*  게시글 정보를 json 파일로 만들어 가짜api로 가져와 제목만 추출하여 가져오기 */}
          <ul className='productList'>
            <li>저는 진짜 개인적으로 비비고가 제일 맛있는 것 같아요</li> 
            <li>비비교 왕교자를 안 먹어봤다? 겸상 안 함</li> 
            <li>님들 제에발 제 인생 만두인 '고향만두' 드셔주세요</li> 
            <li>개성왕만두 진짜 크고 맛있어요. 괜히 개성 왕이 아님ㅠ</li> 
          </ul>
        </div>
      </ProductReview>
    </BestProduct>

    <Delivery>
      <div className='copyright'>
        <h2>혹시 저희가 당신을 배고프게 했나요?</h2>
        <h3>바로 지금, 당신에게 필요한 배달 서비스</h3>
      </div>
      <div className='deliverImg'>
        <img className='cursor-pointer' src={deliveryBM}/>
        <img className='cursor-pointer' src={deliveryYGY}/>
        <img className='cursor-pointer' src={deliveryCP}/>
      </div>
    </Delivery>

    </MainWrapper>
  );
}

export default Main; 