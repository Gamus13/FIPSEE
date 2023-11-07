import React from 'react';
import Home from "./Header";
import Defilant from "./Defilant";
import Navbar from "./Navbar";
import ProjetSection from "./SectionImages";
import HeaderAccueil from "./HeaderSite";
import NewsletterSection from "./FipseeNewsletter";
import FeatureSection from "./FipseeFeatures";
import Service from "./FipseeServices";
// import BlogSection from "./FipseeBlog"
import "../../Styles/Accueil/GlobalSite.css";

import Footer from "./FipseeFooter";
import Hero from "./Hero";
import HeroSection from "./Contact";
const SimpleComponent = () => {
  return (
    <div className="scrollablebarre"  style={{ height: '100vh',  background: 'white',overflowY: 'auto',  overflowX: 'hidden',scrollbarWidth: '122px', scrollbarColor: 'blue' }}>
        {/* <Navbar/>
        <Home/>
        <Defilant/> */}
        <Hero/>
        <HeaderAccueil/>
        <Service/>
        <FeatureSection/>
        <NewsletterSection/>
        
        <Footer/>
        {/* <HeroSection /> */}
        {/* <ProjetSection/> */}
    </div>
      
  );
};

export default SimpleComponent;