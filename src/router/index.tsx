// import { Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Layout from '@/layout';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/home', element: <Home /> }],
  },
  {
    path: '/login',
    element: <Login />,
  },
];
