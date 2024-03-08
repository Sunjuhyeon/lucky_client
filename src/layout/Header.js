import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Header({ Props }) {
  const navItems = [
    {
      label: '회사 소개',
      to: '/intro1',
      subItems: [
        { label: '개요 · 연혁', to: '/intro1' },
        { label: '찾아오시는 길', to: '/intro2' },
        { label: '조직도', to: '/intro3' },
        { label: '사업허가증', to: '/intro4' },
      ],
    },
    {
      label: '서비스 소개',
      to: '/service1',
      subItems: [
        { label: '빌딩경비', to: '/service1' },
        { label: '빌딩청소', to: '/service2' },
        { label: '공사현장경비', to: '/service3' },
        { label: '시설관리', to: '/service4' },
        { label: '주차관리', to: '/service5' },
      ],
    },
    {
      label: '견적 문의',
      to: '/send',
      subItems: [{ label: '견적문의 바로가기', to: '/send' }],
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [moBtn, setMoBtn] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  // 스크롤 감지
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  //모바일 메뉴 토글버튼
  const toggleNav = () => {
    setMoBtn(!moBtn);
  }

  // 2뎁스 메뉴 토글버튼
  const toggleTowNav = (index) => {
    setActiveNav(index === activeNav ? null:index);
  } 

  return (
    <header
      id="header"
      className={`${scrollPosition < 10 ? '' : 'scroll'} ${Props}`}
    >
      <div className="position_wrap">
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
              <button
                type="button"
                className={`mo_nav ${moBtn ? 'on' : ''}`}
                onClick={toggleNav}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul className={`nav_wrap ${moBtn ? 'on' : ''}`}>
                {navItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.to} 
                      onClick={() => {
                        setMoBtn(false);
                      }}
                      >{item.label}</Link>
                      <button
                        type="button"
                        onClick={() => toggleTowNav(index)}
                        className={activeNav === index ? 'on' : ''}
                      >
                        상세메뉴 버튼
                      </button>
                      <ul className={activeNav === index ? 'on' : ''}>
                        {item.subItems.map((subItems, subIndex) => {
                          return (
                            <li key={subIndex}>
                              <Link 
                              to={subItems.to} 
                              onClick={() => 
                                {setMoBtn(false); setActiveNav(null);
                              }}
                              >{subItems.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <a href="tel:024612203" className="btn color_1">
                전화상담 연결
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
