import React from 'react';
import { Swiper } from "swiper";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function StoreSwiper(props) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
      
      
      </Swiper> 
    </>
  )
}

export default StoreSwiper;