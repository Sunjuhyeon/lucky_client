import React from 'react'

export default function Service1() {
  return (
      <div className="service_wrap">
        <div className='tit_wrap'>
          <h3>빌딩경비</h3>
          <p>지속적이고 효율적인 건물관리</p>
        </div>
        <div className='content_wrap'>
          <div className='w_set'>
            <div className='img_wrap service1'>
            </div>
            <div className='txt_wrap'>
              <p className='svc_tit'>범죄예방, 재산손실 및 입주자 보호</p>
              <ul className='svc_list'>
                <li>
                  경비원
                </li>
                <li>
                  주/야, 일근 근무
                </li>
                <li>격일제</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

