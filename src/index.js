import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/genaral.css';
import theme from './assets/style';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './views/Main';
import Intro1 from './views/company/Intro1';
import Intro2 from './views/company/Intro2';
import Intro3 from './views/company/Intro3';
import Intro4 from './views/company/Intro4';
import Service1 from './views/company/Service1';
import Service2 from './views/company/Service2';
import Service3 from './views/company/Service3';
import Service4 from './views/company/Service4';
import Service5 from './views/company/Service5';
import Send from './views/company/Send';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Main /> },
      {
        path: '/intro1',
        element: <Intro1 />,
      },
      {
        path: '/intro2',
        element: <Intro2 />,
      },
      {
        path: '/intro3',
        element: <Intro3 />,
      },
      {
        path: '/intro4',
        element: <Intro4 />,
      },
      {
        path: '/service1',
        element: <Service1 />,
      },
      {
        path: '/service2',
        element: <Service2 />,
      },
      {
        path: '/service3',
        element: <Service3 />,
      },
      {
        path: '/service4',
        element: <Service4 />,
      },
      {
        path: '/service5',
        element: <Service5 />,
      },
      { path: '/send', element: <Send /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode theme={theme}>
    <createBrowserRouter>
      <RouterProvider router={router} />
    </createBrowserRouter>
  </React.StrictMode>
);
