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
                  주민에 대한 신뢰감, 친절, 예의바른 행동, 만족스런 서비스제공
                </li>
                <li>
                  경비원 자질, 향상 및 실무능력 배양하여 유사시에 대처능력 및 행동
                  요령 습득
                </li>
                <li>체계화된 매뉴얼에 따른 안전제일 서비스</li>
                <li>각종 보험 가입 배상책임</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

