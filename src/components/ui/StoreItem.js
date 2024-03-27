import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { isClickedFavorite } from '../../features/StoreSlice';

import map from "../../image/map.jpg";

const Store = styled.div`
  /* margin: 50px 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  p {
    font-size: 19px;
    font-weight: 600;
    padding: 0;
  }

  svg {
    color: red;
    font-size: 30px;
    margin-top: 20px;
  }
`;

function StoreItem(props) {
  const { storeImg, storeTitle, storeLocal, storeFavorite, store } = props

  const dispatch = useDispatch();

  // console.log(store);

  return (
    <div>
      <Store>
        <img src={storeImg} />
        <p>[{storeLocal}] {storeTitle}</p>

        {/* {
          storeFavorite ? 
          <AiFillHeart 
            className='cursor-pointer' 
            onClick={() => dispatch(isClickedFavorite(store))} 
          /> : 
          <AiOutlineHeart 
            className='cursor-pointer' 
            onClick={() => dispatch(isClickedFavorite(store))}  
          />
        } */}
      </Store>
    </div>
  );
}

export default StoreItem;