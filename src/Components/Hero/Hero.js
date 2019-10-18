import React from 'react';
import HeroImg from '../../img/hero.jpg';
import './Hero.scss';
import Button from '../Button/Button';


const Hero = () => {


    return (
        <div className = "container-fluid">
            <div className = "row">
                <div className = "hero-image d-flex align-items-center justify-content-end" style={{backgroundImage: `url(${HeroImg})`}}>
                    <div className = "hero-image-content p-5">
                        <h1 className = "mb-4">Detetu na dar <strong><span className = "text-uppercase">Dar</span> <span className = "text-uppercase">Medica</span></strong></h1>
                        <p>Mi smo u potpunosti posvećeni Vašem detetu. Rad sa decom svih uzrasta od rođenja, do završetka srednje škole. Obavljanje pregleda Vašeg deteta od strane pedijatra i konsultanata iz svih oblasti pedijatrije.
                        <Button className="btn-hero mt-5" name="Saznajte više" /></p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Hero;