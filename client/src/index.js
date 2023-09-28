// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// //We need a package.json installed to use these


// import App from './App.jsx';
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Error from './pages/Error';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import Appointment from './pages/Appointment';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }, {
//         path: '/login',
//         element: <Login />
//       }, {
//         path: '/signup',
//         element: <Signup />
//       },
//       {
//       path: '/aboutus',
//       element: <AboutUs />
//       },
//       {
//       path: '/services',
//       element: <Services />  
//       },
//       {
//       path: '/savedAppointments',
//       // just like in our saved books homework
//       element: <savedAppointments />  
//       },
//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);