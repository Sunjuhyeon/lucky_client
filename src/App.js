import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import Header from './layout/Header';
import Side from './layout/Sidebar';
import Main from './views/Main';
import Intro from './views/company/Intro';
import Sub from './views/company/Sub';
import Send from './views/company/Send'

function App() {

  const location = useLocation();
  const [headerClass, setHeaderClass] = useState('main');

  useEffect(() => {
    // 경로에 따라 Header 클래스를 설정합니다.
    if (location.pathname === '/') {
      setHeaderClass('main');
    } else {
      setHeaderClass('sub');
    }
  }, [location]);


  // const callApi = async () => {
  //   axios.get('/api')
  //   .then((res) => {
  //     console.log(res.data.test)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // };

  // useEffect(() => {
  //   callApi();
  // }, []);

  return (
    <>
    <Header Props={headerClass}/>
    <Side/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/intro" element={<Intro/>}></Route>
      <Route path="/sub" element={<Sub/>}></Route>
      <Route path="/send" element={<Send/>}></Route>
    </Routes>
    </>
  );
}

export default App;
