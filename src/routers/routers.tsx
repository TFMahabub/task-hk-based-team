import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/user-create',
        element: <HomePage />,
      },
      {
        path: '/user-edit',
        element: <HomePage />,
      },
      {
        path: '/user-delete',
        element: <HomePage />,
      },
    ],

  },
]);

export default router;
