import React from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return <div>
    <Nav />
    <Outlet /> 
    {/* The footer is creating a Nav bar at the bottom? */}
    {/* <Footer /> */}
  </div>
}

export default App;