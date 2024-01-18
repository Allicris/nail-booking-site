import React from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const root = {
    backgroundColor: 'black'
  }

  return (
    <div style={root}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};


export default App;