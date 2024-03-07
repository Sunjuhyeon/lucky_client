import React from 'react';
import IntroTab from './IntroTab';


export default function Intro3() {
  return (
    <div className="inner">
      <IntroTab activeTab="intro3" />
      <div className="intro_wrap">
        <div className="group_wrap">
          <img
            src={require('../../assets/images/img/group.png')}
            alt="조직도 이미지"
          />
        </div>
      </div>
    </div>
  );
}
