import React from 'react';
import Iframe from 'react-iframe';



const Map = () => {


    return (
        <div className = "map-container">
            <Iframe src="https://snazzymaps.com/embed/192800" width="100%" height="600px" style="border:none;" frameBorder="0" /> 
        </div>   
    )
}

export default Map;