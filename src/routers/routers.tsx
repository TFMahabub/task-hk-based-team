import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
    ],

  },
]);

export default router;
