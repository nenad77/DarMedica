import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import AboutUs from '../Components/AboutUs/AboutUs';








const MoreAboutUs = () => {
    return (
        <div className="App">
            <Nav />
            <AboutUs />
            <Footer className = "pricelist-footer" />
        </div>
    )
}

export default MoreAboutUs;