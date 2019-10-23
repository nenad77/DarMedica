import React from 'react';
import uniqaLogo from '../../../img/home/partners-logo/uniqa.png';
import wiennerLogo from '../../../img/home/partners-logo/wienner.png';
import dunavLogo from '../../../img/home/partners-logo/dunav.png';
import triglavLogo from '../../../img/home/partners-logo/triglav.png';
import generaliLogo from '../../../img/home/partners-logo/generali.png';
import './Partners.scss';


const Partners = () => {


    return (
        <div className = "partners-home-container p-5">
            <div className = "partners-home d-flex-column justify-content-center">
                <div className = "desc text-center">
                    <h2 className = "pb-5">Partneri i saradnici</h2>
                    <p className = "pb-5">Specijalistička ordinacija iz oblasti pedijatrije Dar Medica ima ugovore sa osiguravajućim kompanijama Uniqa, Wiener Stadtische, Generali, Dunav i Triglav. Pacijent koji ima zdravstveno osiguranje ovih kompanija ne plaća pregled, već ordinacija refundira troškove lečenja od osiguravajućih kompanija.</p>
                </div>
                
                <div className = "logos justify-content-around text-center align-items-center pb-5">
                    
                    <img className ="p-3" src = {uniqaLogo} alt = "Uniqa logo" />

                    <img className ="p-3" src = {wiennerLogo} alt = "Wienner logo" />
 
                    <img className ="p-3" src = {dunavLogo} alt = "Dunav logo" />
   
                    <img className ="p-3" src = {triglavLogo} alt = "Triglav logo" />
  
                    <img className ="p-3" src = {generaliLogo} alt = "Generali logo" />
                    
                </div>
            </div>
                
            
        </div>
       
    )
}

export default Partners;