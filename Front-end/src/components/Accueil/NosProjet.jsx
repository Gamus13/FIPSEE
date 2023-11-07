import React from 'react';
import Home from "./Header";
import Defilant from "./Defilant";
import Navbar from "./Navbar";


const ProjetComponent = () => {
  return (
    <div className="scrollable-content">
        <Navbar/>
        <Home/>
        <Defilant/>
        
    </div>
      
  );
};

export default ProjetComponent;