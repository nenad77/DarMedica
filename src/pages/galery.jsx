import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import GalleryOnPage from '../Components/Gallery/Gallery';








const Galery = () => {
    return (
        <div className="App">
            <Nav />
            <GalleryOnPage />
            <Footer className = "pricelist-footer" />
        </div>
    )
}

export default Galery;