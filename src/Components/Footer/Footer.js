import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const phoneNav = <FontAwesomeIcon icon = {faPhoneAlt} />
const locationNav = <FontAwesomeIcon icon = {faMapMarkerAlt} />
const clockNav = <FontAwesomeIcon icon = {faClock} />

const url = "https://www.google.com/maps/place/Уроша+Мартиновића+19,+Београд/@44.8056951,20.4005234,265m/data=!3m1!1e3!4m5!3m4!1s0x475a6f9b36a516cd:0x4c42bb8409370f6a!8m2!3d44.8058443!4d20.4004147?hl=sr";

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
                    <div className = "footer-clock d-none d-md-block">
                        {clockNav} <span>10 - 22</span>
                    </div>
                </div>
                <div className = "footer-copyright text-center p-4">2019 &copy; Dar Medica Sva prava zadržana </div>
            </div>
        </div>

    )
}

export default Footer;