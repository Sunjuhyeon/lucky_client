import React from 'react';
import IntroTab from './IntroTab';


export default function Intro4() {
  const imgList = [
    {
      cls: 'licence1',
      name: '허가증',
    },
    {
      cls: 'licence2',
      name: '사업자등록증',
    },
    {
      cls: 'licence3',
      name: '근로자파견 사업허가증',
    },
    {
      cls: 'licence4',
      name: '위생신고증',
    },
    {
      cls: 'licence5',
      name: '소독업 허가증',
    },
    {
      cls: 'licence6',
      name: '소프트웨어 사업자 신고확인서',
    },
    {
      cls: 'licence7',
      name: '서비스표등록증',
    },
    {
      cls: 'licence8',
      name: 'ISO인증',
    },
  ];
  return (
    <div className="inner">
      <IntroTab activeTab="intro4" />
      <div className="intro_wrap">
        <div className='w_set'>
        <ul className='licence_wrap'>
          {
            imgList.map((img, i) => {
              return(
              <li key={i} className={img.cls}>
                <span>등록증</span>
                <p>{img.name}</p>
              </li>
              )
            })
          }
        </ul>
        </div>
      </div>
    </div>
  );
}
