import React from 'react';
import Iframe from 'react-iframe';
import './Map.scss';
import cloudFooter from '../../img/footer/cloud-footer.png';



const Map = () => {


    return (
        <div className = "map-container">
            <Iframe src="https://snazzymaps.com/embed/192800" width="100%" height="600px" style="border:none;" frameBorder="0"></Iframe>
            <div className = "cloud-map">
                <img className = "w-100" src = {cloudFooter} alt = "footer clouds" />
            </div>
        </div>   
    )
}

export default Map;