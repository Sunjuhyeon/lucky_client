import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Service4() {
  const imgList = [
    {
      src: 'service4-1.jpeg',
    },
    {
      src: 'service4-2.jpeg',
    },
    {
      src: 'service4-3.jpeg',
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="service_wrap">
      <div className="tit_wrap">
        <h3>외벽청소</h3>
        <p>건물의 외부까지 책임지는</p>
      </div>
      <div className="content_wrap">
        <div className="w_set">
          <div className="img_wrap service4">
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
                      alt="시설관리 이미지"
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
                      alt="시설관리 이미지"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="txt_wrap">
            <p className="svc_tit">
              전문적인 청소 시스템을 통해 외벽의 오염물을 걷어냅니다.
            </p>
            <ul className="svc_list">
              <li>전문 외벽청소</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
