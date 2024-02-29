import React from 'react'

export default function Send() {
  return (
    <div className="w_set">
      <div className="inner">
        <div className="send_wrap">
          <div className="txt_wrap">
            <p>
              <span>럭키시스템의 서비스에 대해</span>
              <span>문의사항이 있으신 고객님들께</span>
            </p>
            <p>담당자가 신속하게 연락드립니다.</p>
          </div>
          <div className="form_wrap">
            <p className="essen_info">
              <span className="essen type_l">필수 입력</span>
            </p>
            <form action="">
              <ul className="form_list">
                <li>
                  <p>담당자명</p>
                  <div className="input_wrap">
                    <input
                      type="text"
                      id="send_name"
                      placeholder="담당자명 입력"
                    />
                    <label htmlFor="send_name">담당자명</label>
                  </div>
                </li>
                <li>
                  <p>연락처</p>
                  <div className="input_wrap">
                    <input
                      type="number"
                      id="send_num"
                      placeholder="'-'제외 숫자만 입력"
                    />
                    <label htmlFor="send_num">연락처</label>
                  </div>
                </li>
                <li>
                  <p>이메일</p>
                  <div className="input_wrap">
                    <input
                      type="text"
                      id="send_email"
                      placeholder="이메일주소 입력"
                    />
                    <label htmlFor="send_email">이메일</label>
                  </div>
                </li>
                <li>
                  <p>필요 서비스</p>
                  <div className="input_wrap">
                    <ul className="ck_wrap">
                      <li className="checkbox">
                        <input type="checkbox" id="ck1" name="ck_list" />
                        <label htmlFor="ck1">빌딩경비</label>
                      </li>
                      <li className="checkbox">
                        <input type="checkbox" id="ck2" name="ck_list" />
                        <label htmlFor="ck2">빌딩청소</label>
                      </li>
                      <li className="checkbox">
                        <input type="checkbox" id="ck3" name="ck_list" />
                        <label htmlFor="ck3">공사현장경비</label>
                      </li>
                      <li className="checkbox">
                        <input type="checkbox" id="ck4" name="ck_list" />
                        <label htmlFor="ck4">시설관리</label>
                      </li>
                      <li className="checkbox">
                        <input type="checkbox" id="ck5" name="ck_list" />
                        <label htmlFor="ck5">주차관리</label>
                      </li>
                    </ul>
                    <span>중복선택 가능</span>
                  </div>
                </li>
                <li>
                  <p>문의내용</p>
                  <div className="input_wrap">
                    <textarea id="send_txt"></textarea>
                    <label htmlFor="send_txt">문의내용</label>
                  </div>
                </li>
                <li>
                  <p>첨부파일</p>
                  <div className="input_wrap">
                    <div className="attach">
                      <label htmlFor="send_file">
                        <span>파일추가</span>
                      </label>
                      <input type="file" id="send_file" />
                    </div>
                    <ul className="file_list">
                      <li>
                        <span>파일이름</span>
                        <button className="btn color_2">삭제</button>
                      </li>
                      <li>
                        <span>파일이름</span>
                        <button className="btn color_2">삭제</button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button type="submit" className='btn color_1'>견적 문의 제출하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
