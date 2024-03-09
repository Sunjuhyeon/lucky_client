import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Service4() {
  const imgList = [
    {
      src: 'service4.jpg',
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="service_wrap">
      <div className="tit_wrap">
        <h3>시설관리</h3>
        <p>더욱 효율적인 시설관리</p>
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
              modules={[FreeMode, Navigation, Thumbs]}
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
                    alt="시설관리 이미지" alt="시설관리 이미지"
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
              메뉴얼을 통해 체계적이고 효과적인 최선의 방법을 찾아 진행합니다.
            </p>
            <ul className="svc_list">
              <li>관리소장 파견</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
