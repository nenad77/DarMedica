import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Colaborators from '../Components/Colaborators/Colaborators';





const PartnersPage = () => {
    return (
        <div className="App">
            <Nav />
            <Colaborators />
            <Footer className = "pricelist-footer" />
        </div>
    )
}

export default PartnersPage;