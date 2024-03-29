import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const phoneNav = <FontAwesomeIcon icon = {faPhoneAlt} />
const locationNav = <FontAwesomeIcon icon = {faMapMarkerAlt} />
const clockNav = <FontAwesomeIcon icon = {faClock} />

const url = "https://www.planplus.rs/#!koordinate/44.80564927943305,20.399979931899487/13";

const Footer = (props) => {


    return (

        <div className = {`container-fluid footer ${props.className}`}>
            <div className = "row flex-column">
                <div className = "footer d-flex justify-content-center justify-content-around pt-4">
                    <div className = "footer-location">
                        {locationNav} <a href = {url}>Blok A, Uroša Martinovića 19, Novi Beograd</a>
                    </div>
                    <div className = "footer-phone">
                        {phoneNav} <a href = "tel:+38166221788">066 22 17 88</a>
                    </div>
                    <div className = "footer-clock  d-md-block">
                        {clockNav} <span>10 - 20 svakog dana</span>
                    </div>
                </div>
                <div className = "footer-copyright text-center p-4">2019 &copy; Dar Medica Sva prava zadržana </div>
            </div>
        </div>

    )
}

export default Footer;