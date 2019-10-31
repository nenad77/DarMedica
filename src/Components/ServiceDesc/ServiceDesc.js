import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import bandaid from '../../img/home/service-icons/band-aid-solid.svg';
import stehoscope from '../../img/home/service-icons/stethoscope-solid.svg';
import syringe from '../../img/home/service-icons/syringe-solid.svg'
import users from '../../img/home/service-icons/users-solid.svg'
import hero from '../../img/service-page/hero.jpg';
import Akutna from '../ServiceDesc/Akutna/Akutna';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


const ServiceDesc = () => {


    return (
        <Fragment>
            <Nav />
            <div className = "container-fluid">
                <div className = "row">
                    <img className = "w-100" src = {hero} alt = "hero" />
                </div>
            </div>

            <div className = "container">
                <div className = "row">
                <div className = "col-xs-12 col-md-3">
                    <ul>
                        <li><NavLink to = "/akutna" activeClassName = "active-class">Akutna stanja</NavLink></li>
                        <li><NavLink to = "/pregledi">Preventivni pregledi</NavLink></li>
                        <li><NavLink to = "/saveti">Savetovalište</NavLink></li>
                        <li><NavLink to = "/vakcina">Vakcinacija</NavLink></li>
                    </ul>
                </div>

                <div className = "col-xs-12 col-md-9">
                   <Akutna />
                </div>
                </div>
            </div>
            <Footer className = "pricelist-footer mt-5" />
        </Fragment>
        
    )
}

export default ServiceDesc;

