import React from 'react'

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='ft_wrap'>
        <div className='w_set'>
          <ul className='f_gnb'>
            <li>
              <span>회사 소개</span>
              <ul>
                <li>
                  <a href="#">인사말</a>
                </li>
                <li>
                  <a href="#">연혁</a>
                </li>
                <li>
                  <a href="#">찾아오시는 길</a>
                </li>
                <li>
                  <a href="#">조직도</a>
                </li>
                <li>
                  <a href="#">사업허가증</a>
                </li>
              </ul>
            </li>
            <li>
              <span>서비스 소개</span>
              <ul>
                <li>
                  <a href="#">빌딩경비</a>
                </li>
                <li>
                  <a href="#">빌딩청소</a>
                </li>
                <li>
                  <a href="#">공사현장경비</a>
                </li>
                <li>
                  <a href="#">시설관리</a>
                </li>
                <li>
                  <a href="#">주차관리</a>
                </li>
              </ul>
            </li>
            <li>
              <span>견적문의</span>
              <ul>
                <li>
                  <a href="#">견적문의 바로가기</a>
                </li>
              </ul>
            </li>
            <li>
              <span>고객센터</span>
              <ul>
                <li>
                  <a href="#">1대1 상담</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className='info_wrap'>
            <div className='sec_l'>
              <span>Copyright ⓒ 2024 럭키시스템(주) All Rights Reserved.</span>
              <p className='company_info'>
                <span>럭키시스템(주)</span>
                <span>사업자등록번호 : 207-81-46891</span>
                <span>주소 : 서울 광진구 아차산로 375 (크레신타워 1116호)</span>
                <span>email : lu3488@naver.com</span>
                <span>Fax : 02-461-2237</span>
              </p>
            </div>
            <div className='sec_r'>
              <a href="#">네이버 블로그</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
