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

const phoneNav = <FontAwesomeIcon icon = {faPhoneAlt} />
const locationNav = <FontAwesomeIcon icon = {faMapMarkerAlt} />
const clockNav = <FontAwesomeIcon icon = {faClock} />

const url = "https://www.google.com/maps/place/Уроша+Мартиновића+19,+Београд/@44.8056951,20.4005234,265m/data=!3m1!1e3!4m5!3m4!1s0x475a6f9b36a516cd:0x4c42bb8409370f6a!8m2!3d44.8058443!4d20.4004147?hl=sr";

const Nav = () => {

    return (
        
        <div className = "fixed-toop">  
            <div className = "top-nav sticky-top">
                <div className = "top-nav-location">
                    {locationNav} <a href = {url}>Blok A, Uroša Martinovića 19, Novi Beograd</a>
                </div>
                <div className = "top-nav-phone">
                    {phoneNav} <a href = "tel:+38166221788">066 22 17 88</a>
                </div>
                <div className = "top-nav-clock d-none d-md-block">
                    {clockNav} <span>10 - 22</span>
                </div>
            </div>
            <nav className=" navbar navbar-expand-lg navbar-light bg-white navbar-medica text-uppercase">
                <a className="navbar-brand" href="/index"><Logo/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/index" activeClassName = "active-class">Početna <span className="sr-only">(current)</span></NavLink>
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

    )
}

export default Nav;