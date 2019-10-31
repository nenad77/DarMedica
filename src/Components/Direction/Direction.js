import React from 'react';
import direction from '../../img/direction/mapa-darmedica.png';
import DirectionBlokovi from './DirectionBlokovi';


const Direction = () => {

    return (
        
        <div className = "container-fluid">
            <div className = "container">
                <div className = "row flex-column">
                    <h1 className = "d-block">Kako do nas?</h1>
                    <div className = "bus-stations">
                        <p>Stanica Agostina Neta</p>
                        <p>Autobskim linijama 89, 95, E1, E5, E6</p>
                        <p>Tramvajskim linijama 11, 13, 7, 9</p>

                        <p>Stanica Omladinskih Brigada</p>
                        <p>Autobskim linijama 610, 67, 68, 708, 73, 76, 94, 89, 95, E1, E5, E6</p>
                        <p>Tramvajskim linijama 11, 13, 7, 9</p>
                    </div>
                </div>
                <div className = "row">
                    <div className = "container-direction">
                        <img className = "w-100" src = {direction} alt = "Direction to the location" />
                        <div className = "direction-blokovi">
                            <DirectionBlokovi />
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default Direction;