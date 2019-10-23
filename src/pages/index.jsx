import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import ServiceHome from '../Components/Services/ServiceHome';
import AboutHome from '../Components/AboutHome/AboutHome';
import Partners from '../Components/Partners/Partners/Partners';
import Map from '../Components/Map/Map';
import Footer from '../Components/Footer/Footer';






const IndexPage = () => {
    return (
        <div className="App">
             <Nav />
             <Hero />
             <ServiceHome />
             <AboutHome />
             <Partners />
             <Map />
             <Footer />
        </div>
    )
}

export default IndexPage;