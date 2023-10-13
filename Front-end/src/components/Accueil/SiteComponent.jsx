import React from 'react';
import Home from "./Header";
import Defilant from "./Defilant";
import Navbar from "./Navbar";
const SimpleComponent = () => {
  return (
    <div style={{ overflow: 'scroll', }}>
        <Navbar/>
        <Home/>
        <Defilant/>
    </div>
      
  );
};

export default SimpleComponent;