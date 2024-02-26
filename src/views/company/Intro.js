import React, { useState } from 'react';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Intro4 from './Intro4';

export default function Intro() {
  // 랜더링 컴포넌트
  const tabComponents = [
    Intro1,
    Intro2,
    Intro3,
    Intro4
  ]
  // 탭메뉴
  const tabMenu = [
    '개요 · 연혁',
    '찾아오시는 길',
    '조직도',
    '사업허가증'
  ]
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (i) => {
    setActiveTab(i);
  }

  return (
    <section className='route_wrap'>
      <ul className='tab_wrap'>
        {
          tabMenu.map((tabName, i) => {
            return(
              <li key={`tab${i}`} className={`${i === activeTab ? 'on' : ''}`}>
                <button type='button' className='anchor' onClick={() => handleTabClick(i)}>{tabName}</button>
              </li>
            )
          })
        }
      </ul>
      <div className='page_wrap'>
        {React.createElement(tabComponents[activeTab])}
      </div>
    </section>
  )
}
