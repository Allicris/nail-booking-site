import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Appointment from './pages/Appointment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
      path: '/aboutus',
      element: <AboutUs />
      },
      {
      path: '/services',
      element: <Services />  
      },
      {
      path: '/appointment',
      element: <Appointment />  
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
