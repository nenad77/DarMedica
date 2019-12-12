import React from 'react';
import './ColaboratorCard.scss';
import logoCard from '../../../img/colaborators/logo-simple.png';



const ColaboratorsCard = (props) => {


    return (
        <div className = "card card-colaborators">
            <div className = "row">
                <div className = "col-sm-2 col-md-2 p-0">
                    <img src = {logoCard} alt = "simple logo" />
                </div>
                <div className = "col-sm-10 col-md-10">
                    <div className = "card-body p-0 mb-5">
                    <h3 className = "card-title">{props.title}</h3>
                    <p className = "card-text body-text-color">{props.speciality}</p>
                    <p className = "card-text body-text-color">{props.workplace}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ColaboratorsCard;