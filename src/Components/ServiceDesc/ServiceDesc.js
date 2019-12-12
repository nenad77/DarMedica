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
import './ServiceDesc.scss';


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
                    <ul className = "sidebar-nav pt-4">
                        <li><NavLink to = "/akutna" activeClassName = "active-class"><img className = "img-acute" src = {bandaid} alt = "bandaid" /> Akutna stanja</NavLink></li>
                        <li><NavLink to = "/pregledi" activeClassName = "active-class"><img className = "img-exam" src = {stehoscope} alt = "stehoscope" /> Preventivni pregledi</NavLink></li>
                        <li><NavLink to = "/saveti" activeClassName = "active-class"><img className = "img-acute" src = {users} alt = "users" /> Savetovalište</NavLink></li>
                        <li><NavLink to = "/vakcina" activeClassName = "active-class"><img className = "img-exam" src = {syringe} alt = "syringe" /> Vakcinacija</NavLink></li>
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

