import { useEffect, useRef, useState } from "react";
import {SectionsContainer, Section} from 'react-fullpage';
import styled from 'styled-components';

function Sub() {
  const Body = styled.body`
  margin : 0;
`
const Section = styled.section`
  height : 100vh;
`
const Column1 = styled.div`
  background-color : red;
  height : 100%;
  width : 100%;
`
const Column2 = styled.div`
  background-color : yellow;
  height : 100%;
  width : 100%;
`
const Column3 = styled.div`
  background-color : blue;
  height : 100%;
  width : 100%;
`
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };
  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1>
            <h1>Welcom to Roobits</h1>
            <div>소중한 사람들과 추억을 남겨보세요!</div>
            <div>D-Day를 더 특별하게 만들어 드립니다.</div>
            <button>나의 룸 보기</button>
          </Column1>
        </Section>
        <Section>
          <Column2>소개 페이지</Column2>
        </Section>
        <Section>
          <Column3>테마 및 기능 설명</Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}

export default Sub;