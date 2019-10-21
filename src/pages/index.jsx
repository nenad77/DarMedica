import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import ServiceHome from '../Components/Services/ServiceHome';
import AboutHome from '../Components/AboutHome/AboutHome';
import Partners from '../Components/Partners/Partners/Partners';






const IndexPage = () => {
    return (
        <div className="App">
             <Nav />
             <Hero />
             <ServiceHome />
             <AboutHome />
             <Partners />
        </div>
    )
}

export default IndexPage;