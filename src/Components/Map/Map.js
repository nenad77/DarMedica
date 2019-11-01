import React from 'react';
import './Map.scss';
import cloudFooter from '../../img/footer/cloud-footer.png';

import mapImg from '../../img/home/maps/map.png';
import pin from '../../img/home/maps/pin.svg';

const url = "https://www.planplus.rs/#!koordinate/44.80564927943305,20.399979931899487/13";

const Map = () => {


    return (
        <div className = "map-container">
            <a href = {url} target = "_blank" rel = "noopener noreferrer" >
                <img className = "w-100" src = {mapImg} alt = "location of Dar Medica" />
                <img className = "map-pin" src = {pin} alt = "location pin" />
            </a>
            <div className = "cloud-map">
                <img className = "w-100" src = {cloudFooter} alt = "footer clouds" />
            </div>
        </div>   
    )
}

export default Map;