import React from 'react';
import './App.css';
//We need to import Router from react, Apollo Provider and set context from apollo

function App() {

  return (
    // We need Apollo Provider and React router opening tab here
    <>
     <Header />
     <Nav />
     <Switch>
      {/* This is where we will be switching from one path to another */}
     </Switch>
    <Footer />
    </>
    // We need Apollo Provider and React router closing tab here
  );
}

export default App;