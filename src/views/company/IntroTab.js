import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function IntroTab({activeTab}) {
  // 탭메뉴
  const tabMenu = [
    {
      id: 'intro1',
      name: '개요 · 연혁',
      link: '/intro1',
    },
    {
      id: 'intro2',
      name: '찾아오시는 길',
      link: '/intro2',
    },
    {
      id: 'intro3',
      name: '조직도',
      link: '/intro3',
    },
    {
      id: 'intro4',
      name: '사업허가증',
      link: '/intro4',
    },
  ];

  return (
    <ul className="tab_wrap">
      {tabMenu.map((tab, i) => {
        return (
          <li key={`tab${i}`} className={activeTab === tab.id ? 'on' : ''}>
            <Link to={tab.link} className="anchor">
              {tab.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
