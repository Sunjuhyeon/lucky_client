import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Service3() {
  const imgList = [
    {
      src: 'service3-1.jpeg',
    },
    {
      src: 'service3-2.jpeg',
    },
    {
      src: 'service3-3.jpeg',
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="service_wrap">
      <div className="tit_wrap">
        <h3>공사현장경비</h3>
        <p>더욱 안전한 현장관리</p>
      </div>
      <div className="content_wrap">
        <div className="w_set">
          <div className="img_wrap service3">
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {imgList.map((img, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={require(`../../assets/images/img/${img.src}`)}
                      alt="공사현장경비 이미지"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {imgList.map((img, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={require(`../../assets/images/img/${img.src}`)}
                      alt="공사현장경비 이미지"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="txt_wrap">
            <p className="svc_tit">공사현장의 재산과 인명을 보호</p>
            <ul className="svc_list">
              <li>아파트</li>
              <li>공장</li>
              <li>대형상가</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
