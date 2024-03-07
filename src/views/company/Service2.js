import React from 'react'

export default function Service2() {
  return (
    <div className="service_wrap">
      <div className="tit_wrap">
        <h3>빌딩청소</h3>
        <p>건물의 특성 및 자재에 맞는 친환경 청소로 건물수명 연장</p>
      </div>
      <div className="content_wrap">
        <div className="w_set">
          <div className="img_wrap service2"></div>
          <div className="txt_wrap">
            <p className="svc_tit">
              근무자에 반복적인 교육으로 전문적인 서비스 제공
            </p>
            <ul className="svc_list">
              <li>미화원 파견</li>
              <li>소독</li>
              <li>건물 및 사무실 대청소</li>
              <li>왁스 작업</li>
              <li>카페트 청소</li>
              <li>대리석 광택</li>
              <li>전문 외벽 청소</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

