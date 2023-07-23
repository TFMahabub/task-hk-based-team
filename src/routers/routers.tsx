import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import UserCreate from '../pages/userCreate/UserCreate';
import UsersTable from '../pages/userDelete/UsersTable';
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
        path: '/user-edit/:id',
        element: <UserEdit />,
      },
      {
        path: '/users-table',
        element: <UsersTable />,
      },
    ],

  },
]);

export default router;
