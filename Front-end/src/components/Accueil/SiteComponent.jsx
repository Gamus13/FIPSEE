import React from 'react';
import Home from "./Header";
import Defilant from "./Defilant";
import Navbar from "./Navbar";
import ProjetSection from "./SectionImages";
const SimpleComponent = () => {
  return (
    <div className="scrollable-content" style={{ maxHeight: '400px', overflow: 'scroll', }}>
        <Navbar/>
        <Home/>
        <Defilant/>
        <ProjetSection/>
    </div>
      
  );
};

export default SimpleComponent;