import React from 'react';
import HeroImg from '../../img/home/hero.jpg';
import './Hero.scss';
import Button from '../Button/Button';



const Hero = () => {


    return (
        <div className = "container-fluid">
            <div className = "row">
                <div className = "hero-image d-flex align-items-center justify-content-end" style={{backgroundImage: `url(${HeroImg})`}}>
                    <div className = "hero-image-content p-5">
                        <h1 className = "mb-4">Detetu na dar <strong><span className = "text-uppercase">Dar</span> <span className = "text-uppercase">Medica</span></strong></h1>
                        <p>Mi smo u potpunosti posveceni Vasem detetu i Vama. Brinemo o deci od rodjenja do punoletstva. Verujemo da je porodični pedijatar važan u pružanju najbolje nege za decu, a po potrebi angažujemo i konsultante, stručnjake iz raznih oblasti medicine.
                        <Button className="btn-hero mt-5" name="Saznajte više" navLink="/saznajte-vise" /></p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Hero;