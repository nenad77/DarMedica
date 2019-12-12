import React from 'react';
import aboutHomeImg from '../../img/home/about-home.jpg';
import cloudImg from '../../img/home/cloud.png';
import './AboutHome.scss';

const AboutHome = () => {


    return (

        <div className = "container-fluid about-home pt-5">
            <div className = "row">
                <div className = "col-md-6 d-flex align-items-center">
                    <div className = "about-home-text p-5">
                        <h2 className = "mb-4">Dobrodošli u <span className = "text-uppercase d-block">Dar Medica</span></h2>
                        <p>Dr. Danka Komatina, specijalista pedijatrije je osnivač i director specijalističke ordinacije iz oblasti pedijatrije Dar Medica. Dr Komatina je pedijatar sa preko 15 godina iskustva u radu sa decom svih uzrasta. Ordinacija je osnovana iz želje da se posveti svakom detetu, svakoj porodici, i uverenja da je concept porodičnog lekara važan, jer se tako razvija poverenje.</p>

                        <p>Neophodno je da se dete oseća da mu je pedijatar prijatelj, što osigurava adekvatan pregled i pridržavanje saveta i terapije.</p>
                    </div>
                </div>
                <div className = "col-md-6">
                    <div className = "img-container p-5">
                        <img className = "w-100" src = {aboutHomeImg} alt = "Doctor with child" />
                    </div>
                </div>
            </div>
            <div className = "row">
                <img className = "w-100" src = {cloudImg} alt = "cloud" />
            </div>
        </div>
       
    )
}

export default AboutHome;