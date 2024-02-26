import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"
import Footer from '../layout/Footer';
import Partner from './sub/Partner';
import Service from './sub/Service';

const MainSection = styled.div`
  padding : 0 0 20px;
`

export default function Main() {
  const [showService, setShowService] = useState(false);
  const toggleService  = () => {
    setShowService(!showService);
  }

  return (
    <>
    <MainSection>
    <section id='banner_wrap'>
      <div className='txt_wrap'> 
        <h3>
          30년 경력의 노하우를 담아<br />
          최적의 건물관리 서비스를 제공합니다.
        </h3>
        <Link to="#" className='btn color_1'>무료 견적받기</Link>
      </div>
    </section>
    <section id='service_wrap'>
      <div className='tit_wrap'>
        <span className='nunito'>SERVICE CATEGORY</span>
        <p>
          <span>공간에 필요한</span>
          <span>모든 서비스를 한번에!</span>
        </p>
      </div>
      <div className='content_wrap'>
        <ul className='service_list'>
          <li>
            <div className='ico_wrap list1'>
              <i></i>
            </div>
            <strong>빌딩경비</strong>
          </li>
          <li>
            <div className='ico_wrap list2'>
              <i></i>
            </div>
            <strong>빌딩청소</strong>
          </li>
          <li>
            <div className='ico_wrap list3'>
              <i></i>
            </div>
            <strong>공사현장경비</strong>
          </li>
          <li>
            <div className='ico_wrap list4'>
              <i></i>
            </div>
            <strong>시설관리</strong>
          </li>
          <li>
            <div className='ico_wrap list5'>
              <i></i>
            </div>
            <strong>주차관리</strong>
          </li>
        </ul>
        {showService && <Service/>}
        {/* show_all 버튼 클릭 시 전체 서비스 노출 */}
        <button type='button' className={`show_all ${showService ? 'on' : ''}`} onClick={toggleService}>
          <span>{showService ? '전체 서비스 접기' : '전체 서비스 보기'}</span>
        </button>
      </div>
    </section>
    <section id='about_wrap'>
      <div className='tit_wrap'>
        <span className='nunito'>ABOUT US</span>
        <p>
          <span>왜! <em>럭키시스템</em>을</span>
          <span>선택해야할까요?</span>
        </p>
      </div>
      <div className='content_wrap'>
        <ul className='list_wrap'>
          <li>
            <div className='img_wrap'>
              <img src={require('../assets/images/img/dummy.png')} alt="특장점 이미지" />
            </div>
            <div className='txt_wrap'>
              <span className='nunito'>POINT 01</span>
              <h3>
                <span>소통왕 <em>전담매니저</em>가 고객님의 상황에</span>
                <span>맞춤 케어를 해드립니다.</span>
              </h3>
              <p>
                <span>럭키시스템의 전담 매니저는 적극적이고 신속한 피드백을 통해</span>
                <span>고객님의 상황을 빠르게 파악하고 해결해드립니다.</span>
              </p>
            </div>
          </li>
          <li>
            <div className='img_wrap'>
              <img src={require('../assets/images/img/dummy.png')} alt="특장점 이미지" />
            </div>
            <div className='txt_wrap'>
              <span className='nunito'>POINT 02</span>
              <h3>
                <span>소통왕 <em>전담매니저</em>가 고객님의 상황에</span>
                <span>맞춤 케어를 해드립니다.</span>
              </h3>
              <p>
                <span>럭키시스템의 전담 매니저는 적극적이고 신속한 피드백을 통해</span>
                <span>고객님의 상황을 빠르게 파악하고 해결해드립니다.</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id='process_wrap'>
      <div className='tit_wrap'>
        <span className='nunito'>PROCESS</span>
        <p>럭키시스템 이용방법</p>
      </div>
      <div className='content_wrap'>
        <ul className='list_wrap'>
          <li className='list1'>
            <h3>견적 신청</h3>
            <p>
              현장의 기본 정보를<br />
              토대로 견적을 신청합니다.
            </p>
          </li>
          <li className='list2'>
            <h3>견적 발송</h3>
            <p>
              현장의 기본 정보를<br />
              토대로 견적을 신청합니다.
            </p>
          </li>
          <li className='list3'>
            <h3>계약 진행</h3>
            <p>
              현장의 기본 정보를<br />
              토대로 견적을 신청합니다.
            </p>
          </li>
          <li className='list4'>
            <h3>서비스 이용</h3>
            <p>
              현장의 기본 정보를<br />
              토대로 견적을 신청합니다.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id='partner_wrap'>
      <div className='tit_wrap'>
        <p>
          <span>럭키시스템과 함께하는</span>
          <span>대표 파트너사</span>
        </p>
      </div>
      <div className='slide_banner'>
        <Partner/>
      </div>
    </section>
    <section id='sub_wrap'>
      <ul>
        <li className='sub1'>
          <div className='list_wrap'>
            <p className='sub_tit'>
              <span>럭키시스템에 대해</span>
              <span>궁금하신 사항이 있으신가요?</span>
            </p>
            <div className='number_wrap'>
              <strong>02-461-2203</strong>
              <strong>010-3667-3231</strong>
            </div>
            <p className='time_wrap'>7:30 ~ 19:00 (연중무휴)</p>
          </div>
        </li>
        <li className='sub2'>
          <a href="#">
            <div className='list_wrap'>
              <span>오시는 길</span>
            </div>
          </a>
        </li>
        <li className='sub3'>
          <a href="#">
            <div className='list_wrap'>
              <span>무료견적 바로가기</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    </MainSection>
    <Footer/>
    </>
  )
}
