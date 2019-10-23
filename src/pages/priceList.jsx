import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import PriceList from '../Components/PriceList/PriceList';



const PriceListPage = () => {
    return (
        <div className="App">
            <Nav />
            <PriceList />
            <Footer className = "pricelist-footer" />
        </div>
    )
}

export default PriceListPage;