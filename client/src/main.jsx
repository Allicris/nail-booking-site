import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App';
import Home from './pages/Home/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import SaveAppointments from './pages/SaveAppointments';

// Create an Apollo Client instance
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    ),
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
      path: '/saveAppointments',
      element: <SaveAppointments />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)