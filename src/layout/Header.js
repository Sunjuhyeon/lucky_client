import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 스크롤 감지
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header id='header' className={`${scrollPosition < 10 ? '' : 'scroll'}`}>
      <div className='w_set'>
        <div className='hd_wrap'>
          <h1 className='logo'>
            <a href="#">
              <img src={require('../assets/images/img/logo.png')} alt="럭키시스템(주) 로고"/>
            </a>
          </h1>
          <nav>
            <button type='button' className='mo_nav'>모바일 버전 메뉴바</button>
            <ul className='nav_wrap'>
              <li>
                <Link to="/intro">회사 소개</Link>
                <ul>
                  <li>
                    <Link to="/intro">인사말</Link>
                  </li>
                  <li>
                    <a href="#">연혁</a>
                  </li>
                  <li>
                    <a href="#">찾아오시는 길</a>
                  </li>
                  <li>
                    <a href="#">조직도</a>
                  </li>
                  <li>
                    <a href="#">사업허가증</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/sub">서비스 소개</Link>
                <ul>
                  <li>
                    <a href="#">빌딩경비</a>
                  </li>
                  <li>
                    <a href="#">빌딩청소</a>
                  </li>
                  <li>
                    <a href="#">공사현장경비</a>
                  </li>
                  <li>
                    <a href="#">시설관리</a>
                  </li>
                  <li>
                    <a href="#">주차관리</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">견적 문의</a>
              </li>
              <li>
                <a href="#">고객센터</a>
                <ul>
                  <li>
                    <a href="#">1대1 상담</a>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="#" className='btn color_1'>빠른 전화상담</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
