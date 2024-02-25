import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch } from 'react-redux';
import { isClickedFavorite } from '../features/StoreSlice';

const SwiperStyled = styled.div`
  img {
    background-color: #fff;
    width: 320px;
    height: 240px;
    object-fit: cover;
    /* object-fit: scale-down; */
    object-position: center 75%;
  }
`

const SwiperItem = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  svg {
    color: red;
    font-size: 30px;
  }
`;

function NewStoreSwiper(props) {
  const { newStore } = props;

  const dispatch = useDispatch();

  return (
    <SwiperStyled>
      <Swiper 
        navigation={true}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
        autoplay={{
          delay:5000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={2}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >

      {
        newStore.map((store) => {
          return (
            <SwiperSlide key={store.id}>
              <SwiperItem>
                <img src={store.imagePath} />
                <p>[{store.local}] {store.title}</p>
                {
                  store.favorite ? 
                  <AiFillHeart 
                    className='cursor-pointer' 
                    onClick={() => dispatch(isClickedFavorite(store))} 
                  /> : 
                  <AiOutlineHeart 
                    className='cursor-pointer' 
                    onClick={() => dispatch(isClickedFavorite(store))}  
                  />
                }
              </SwiperItem>
            </SwiperSlide>
          )
        })
      }
      
      </Swiper> 
    </SwiperStyled>
  )
}

export default NewStoreSwiper;