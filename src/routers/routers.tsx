import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import UserCreate from '../pages/userCreate/UserCreate';
import UserDelete from '../pages/userDelete/UserDelete';
import UserEdit from '../pages/userEdit/UserEdit';

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
        element: <UserCreate />,
      },
      {
        path: '/user-edit',
        element: <UserEdit />,
      },
      {
        path: '/user-delete',
        element: <UserDelete />,
      },
    ],

  },
]);

export default router;
