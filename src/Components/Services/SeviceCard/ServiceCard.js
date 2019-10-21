import React from 'react';
import Button from '../../Button/Button';
import './ServiceCard.scss';

const ServiceCard = (props) => {


    return (

        <div className = {`col-sm-6 col-xs-12 col-md-3 p-5 text-center text-white service-card ${props.className}`}>
            <div className = "service-icon">
                <img src = {`${props.icon}`} alt = {props.title}/>
            </div>
            <h2 className = "mb-4">{props.title}</h2>
            <p className = "mb-5">{props.desc}</p>
            <Button name="Detaljnije" navLink = {`${props.serviceNavLink}`}/>
        </div>
       
    )
}

export default ServiceCard;