import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Direction from '../Components/Direction/Direction';






const DirectionPage = () => {
    return (
        <div className="App">
            <Nav />
            <Direction />
            <Footer className = "pricelist-footer" />
        </div>
    )
}

export default DirectionPage;