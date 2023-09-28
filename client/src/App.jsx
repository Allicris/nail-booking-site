import React from 'react';
import './App.css';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Nav';
//We need to import Router from react, Apollo Provider and set context from apollo


function App() {

  return (
    // We need Apollo Provider and React router opening tab here
    <>
     <Nav />
      {/* This is where we will be switching from one path to another */}
    <Footer />
    </>
    // We need Apollo Provider and React router closing tab here
  );
}

export default App;