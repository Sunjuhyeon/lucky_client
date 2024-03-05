import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Header({Props}) {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 스크롤 감지
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header
      id="header"
      className={`${scrollPosition < 10 ? '' : 'scroll'} ${Props}`}
    >
      <div className="w_set">
        <div className="hd_wrap">
          <h1 className="logo">
            <Link to="/">
              <img
                src={require('../assets/images/img/logo.png')}
                alt="럭키시스템(주) 로고"
              />
            </Link>
          </h1>
          <nav>
            <button type="button" className="mo_nav">
              모바일 버전 메뉴바
            </button>
            <ul className="nav_wrap">
              <li>
                <Link to="/intro1">회사 소개</Link>
                <ul>
                  <li>
                    <Link to="/intro1">개요 · 연혁</Link>
                  </li>
                  <li>
                    <Link to="/intro2">찾아오시는 길</Link>
                  </li>
                  <li>
                    <Link to="/intro3">조직도</Link>
                  </li>
                  <li>
                    <Link to="/intro4">사업허가증</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/service1">서비스 소개</Link>
                <ul>
                  <li>
                    <Link to="/service1">빌딩경비</Link>
                  </li>
                  <li>
                    <Link to="/service2">빌딩청소</Link>
                  </li>
                  <li>
                    <Link to="/service3">공사현장경비</Link>
                  </li>
                  <li>
                    <Link to="/service4">시설관리</Link>
                  </li>
                  <li>
                    <Link to="/service5">주차관리</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/send">견적 문의</Link>
              </li>
            </ul>
            <a href="tel:024612203" className="btn color_1">
              빠른 전화상담
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
