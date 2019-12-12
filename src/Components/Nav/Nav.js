import React from 'react';
import Logo from '../logo/logo';
import './Nav.scss';
import '../Button/Button.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

import Headroom from 'react-headroom';

const phoneNav = <FontAwesomeIcon icon = {faPhoneAlt} />
const locationNav = <FontAwesomeIcon icon = {faMapMarkerAlt} />
const clockNav = <FontAwesomeIcon icon = {faClock} />

const url = "https://www.planplus.rs/#!koordinate/44.80564927943305,20.399979931899487/13";


const Nav = () => {



    return (
        <Headroom>
        <div className = "fixed-top-nav">  
            <div className = "top-nav">
                <div className = "top-nav-location">
                    {locationNav} <a href = {url} target = "_blank" rel="noopener noreferrer">Blok A, Uroša Martinovića 19, Novi Beograd</a>
                </div>
                <div className = "top-nav-phone">
                    {phoneNav} <a href = "tel:+38166221788">066 22 17 88</a>
                </div>
                <div className = "top-nav-clock d-md-block">
                    {clockNav} <span>10 - 20 svakog dana</span>
                </div>
            </div>
            <nav className=" navbar navbar-expand-lg navbar-light bg-white navbar-medica text-uppercase">
                <a className="navbar-brand" href="/"><Logo/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" >Početna <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usluge" activeClassName = "active-class">Usluge</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/konsultanti" activeClassName = "active-class">Konsultanti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cenovnik" activeClassName = "active-class">Cenovnik</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/galerija" activeClassName = "active-class">Galerija</NavLink>
                        </li>
                        <li className="nav-item">
                            <Button className="btn-nav" name="Kako do nas" navLink="/kako-do-nas" />
                        </li>
                    </ul>
                </div>
                
            </nav>

        </div>
        </Headroom>
    )
}

export default Nav;