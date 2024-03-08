import React, { Component } from 'react'
import IntroTab from './IntroTab';

export class Intro1 extends Component {
  render() {
    return (
      <div className="inner">
        <IntroTab activeTab="intro1" />
        <div className="intro_wrap">
          <div className="tit_wrap">
            <p>
              <span>
                럭키시스템(주)는 고객만족 <br className="mo_br" /> 경영을 위해
                노력하는
              </span>
              <span>
                <em>건물종합관리</em>, <em>근로자파견</em> 기업입니다.
              </span>
            </p>
          </div>
          <div className="content_wrap">
            <div className="company_wrap">
              <div className="info_wrap">
                <dl>
                  <dt>설립일</dt>
                  <dd>1996년 9월 2일</dd>
                </dl>
                <dl>
                  <dt>주요사업</dt>
                  <dd>
                    <ul>
                      <li>빌딩경비</li>
                      <li>빌딩청소</li>
                      <li>공사현장관리</li>
                      <li>시설관리</li>
                      <li>주차관리</li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>주요자격</dt>
                  <dd>
                    <ul>
                      <li>ISO 국제품질인증</li>
                      <li>조달청 등록업체</li>
                      <li>중소기업</li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>사업자 등록 업종</dt>
                  <dd>
                    <ul>
                      <li>
                        경비용역. 감시장비 CC-TV.DVR
                        설치공사.빌딩종합관리.정보통신IT업
                      </li>
                      <li>
                        위생관리. 청소.저수조.방역(대행).공기정화(닥트).Soft
                        Ware 개발사업
                      </li>
                      <li>
                        주택관리. E/L승강기보수. 건물시설관리. 근로자파견.
                        주차장관리운영
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className="his_wrap">
                <p>연혁</p>
                <div className="his_list">
                  <dl>
                    <dt>1996년</dt>
                    <dd>
                      <ul>
                        <li>경비용역업허가 (경찰청장 제85호)</li>
                        <li>위생관리용역업 (광진구청 제32호)</li>
                        <li>소독업 허가증 (광진보건소 제16호)</li>
                        <li>근로자 파견업 허가 (노동부 99-06호)</li>
                      </ul>
                    </dd>
                  </dl>
                  <dl>
                    <dt>1999년</dt>
                    <dd>
                      <ul>
                        <li>근로자 파견업 허가 (노동부 99-06호)</li>
                        <li>정보통신.Soft Ware개발 (정통부99-제165호)</li>
                      </ul>
                    </dd>
                  </dl>
                  <dl>
                    <dt>2000년 ~ 2005년</dt>
                    <dd>
                      <ul>
                        <li>경기지점등기(3개소) (인천.일산.판교지점개설)</li>
                        <li>홈크린닝 (차량 10대)투입 (특허청허가.사업착수)</li>
                        <li>경기지사(창고) 100坪이전 (성남 수정구 627번)</li>
                        <li>저수조.물탱크.닥타 受注 (광진 구청 제 55호)</li>
                        <li>한국전력,조달본부 受注 (등록필 03.1-0018호)</li>
                        <li>청와대,정부청사 受注 (등록필 03.3-0011호)</li>
                        <li>ISO 9001.2000 품질획득 (건물관리.경비.청소)</li>
                      </ul>
                    </dd>
                  </dl>
                  <dl>
                    <dt>2007 ~ 현재</dt>
                    <dd>
                      <ul>
                        <li>
                          한글 전용 키위드망 구축 (디지털네임.넷피아 60個)
                        </li>
                        <li>조달청 업체등록 실적업체 (조달청 2009.03.01)</li>
                        <li>중소기업 업체등록 기업 (제0011-2010-2792호)</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro1