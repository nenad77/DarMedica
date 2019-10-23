import React from 'react';
import Logo from '../logo/logo';
import './Nav.scss';
import '../Button/Button.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const phoneNav = <FontAwesomeIcon icon = {faPhoneAlt} />
const locationNav = <FontAwesomeIcon icon = {faMapMarkerAlt} />
const clockNav = <FontAwesomeIcon icon = {faClock} />

const Nav = () => {

    return (
        
        <div className = "fixed-toop">  
            <div className = "top-nav sticky-top">
                <div className = "top-nav-location">
                    {locationNav} <Link to = "/">Blok A, Uroša Martinovića 19, Novi Beograd</Link>
                </div>
                <div className = "top-nav-phone">
                    {phoneNav} <a href = "tel:+38166221788">066 22 17 88</a>
                </div>
                <div className = "top-nav-clock d-none d-md-block">
                    {clockNav} <span>10 - 22</span>
                </div>
            </div>
            <nav className=" navbar navbar-expand-lg navbar-light bg-white navbar-medica text-uppercase">
                <a className="navbar-brand" href="/"><Logo/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Početna <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Usluge</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/saradnici">Saradnici</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cenovnik">Cenovnik</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Galerija</Link>
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