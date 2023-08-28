import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Reservation from '../pages/Reservation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation',
    element: <Reservation />,
  },
]);
