import React from 'react'

export default function Service5() {
  return (
    <div className="service_wrap">
      <div className="tit_wrap">
        <h3>주차관리</h3>
        <p>입주민과 방문객이 편안한 주차관리</p>
      </div>
      <div className="content_wrap">
        <div className="w_set">
          <div className="img_wrap service5"></div>
          <div className="txt_wrap">
            <p className="svc_tit">
              입주민과 방문객의 편의와 안전을 최우선으로 생각합니다.
            </p>
            <ul className="svc_list">
              <li>차량 통제 및 방문객 안내</li>
              <li>주차요금 정산</li>
              <li>주차장내 시설물 보호 및 관리</li>
              <li>청결유지 및 사고예방</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

