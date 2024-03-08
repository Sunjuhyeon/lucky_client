import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
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
  return (
    <footer id="footer">
      <div className="ft_wrap">
        <ul className="f_gnb">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.to}
                >
                  {item.label}
                </Link>
                <ul>
                  {item.subItems.map((subItems, subIndex) => {
                    return (
                      <li key={subIndex}>
                        <Link
                          to={subItems.to}
                        >
                          {subItems.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="info_wrap">
          <div className="sec_l">
            <p className="company_info">
              <span>상호 : 럭키시스템(주)</span>
              <span>대표이사 : 선진규</span>
            </p>
            <p className="info_list">
              <span>소재지 : 서울 광진구 아차산로 375 (크레신타워 1116호)</span>
            </p>
            <p className="info_sub">
              <span>사업자등록번호 : 207-81-46891</span>
              <span>건물위생관리업 제 011호</span>
              <span>시설경비허가증 제 549호</span>
            </p>
            <p className="info_sub">
              <span>Tel : 02-461-2203</span>
              <span>Fax : 02-461-2237</span>
              <span>E-mail : lu3488@naver.com</span>
            </p>
            <span>Copyright ⓒ 2024 럭키시스템(주) All Rights Reserved.</span>
          </div>
          <div className="sec_r">
            <a href="#">네이버 블로그</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
