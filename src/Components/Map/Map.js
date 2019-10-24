import React from 'react';
import './Map.scss';
import cloudFooter from '../../img/footer/cloud-footer.png';

import mapImg from '../../img/home/maps/map.png';
import pin from '../../img/home/maps/pin.svg';

const url = "https://www.google.com/maps/place/Уроша+Мартиновића+19,+Београд/@44.8056951,20.4005234,265m/data=!3m1!1e3!4m5!3m4!1s0x475a6f9b36a516cd:0x4c42bb8409370f6a!8m2!3d44.8058443!4d20.4004147?hl=sr";

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