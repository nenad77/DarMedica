import React from 'react';
import direction from '../../img/direction/map/map.svg';
import './Direction.scss';


const Direction = () => {

    return (
        
        <div className = "container-fluid">
            <div className = "container">
                <div className = "row flex-column">
                    <h1 className = "d-block">Kako do nas?</h1>
                    {/* <div className = "bus-stations">
                        <p>Stanica Agostina Neta</p>
                        <p>Autobskim linijama 89, 95, E1, E5, E6</p>
                        <p>Tramvajskim linijama 11, 13, 7, 9</p>

                        <p>Stanica Omladinskih Brigada</p>
                        <p>Autobskim linijama 610, 67, 68, 708, 73, 76, 94, 89, 95, E1, E5, E6</p>
                        <p>Tramvajskim linijama 11, 13, 7, 9</p>
                    </div> */}
                </div>
                <div className = "row py-5">
                    <div className = "col-md-12">
                        <img  src = {direction} alt = "Direction to the location" />
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default Direction;