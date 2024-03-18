import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Service1() {
  const imgList = [
    {
      src: 'service1-1.jpeg',
    },
    {
      src: 'service1-2.jpeg',
    },
    {
      src: 'service1-3.jpeg',
    },
    {
      src: 'service1-4.jpeg',
    },
    {
      src: 'service1-5.jpeg',
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="service_wrap">
      <div className="tit_wrap">
        <h3>빌딩경비</h3>
        <p>지속적이고 효율적인 건물관리</p>
      </div>
      <div className="content_wrap">
        <div className="w_set">
          <div className="img_wrap service1">
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
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {imgList.map((img, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      src={require(`../../assets/images/img/${img.src}`)}
                      alt="빌딩경비 이미지"
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
                      alt="빌딩경비 이미지"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="txt_wrap">
            <p className="svc_tit">범죄예방, 재산손실 및 입주자 보호</p>
            <ul className="svc_list">
              <li>경비원</li>
              <li>주/야, 일근 근무</li>
              <li>격일제</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
