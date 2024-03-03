import axios from 'axios';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollTop from './layout/ScrollTop';
import Header from './layout/Header';
import Side from './layout/Sidebar';

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

  return (
    <>
      <ScrollTop />
      <Header Props={headerClass} />
      <Side />
      <Outlet />
    </>
  );
}

export default App;
