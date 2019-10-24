import React, {Fragment} from 'react';
import heroImg from '../../img/colaborators/hero.png';
import ColaboratorsCard from './ColaboratorCard/ColaboratorCard';



const Colaborators = () => {


    return (
        <Fragment>
            <div className = "container-fluid">
                <div className = "row">
                    <img className = "w-100" src = {heroImg} alt = "colaborators" />
                </div>
            </div>
            <div className = "container">
                <div className = "row flex-column text-center p-5">
                    <h1>Konsultanti</h1>
                    <h3>Specijalistička pedijatrijska ordinacija Dar Medica</h3>
                </div>
                <div className = "row my-5">
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard title = "Dr Dragana Antić" speciality = "spec. pedijatrije / opšta pedijatrija" workplace = "Dom zdravlja 'Novi Beograd'" />
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Olivera Čović-Nestorović" speciality = "spec. pedijatrije / opšta pedijatrija" workplace = "V.M.A."/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Gordana Timić" speciality = "spec. pedijatrije / opšta pedijatrija" workplace = "penzioner"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Nevena Jovičić" speciality = "spec. pedijatrije / pulmologija" workplace = "UDK 'Tiršova'"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Jasmina Jocić " speciality = "spec. pedijatrije / pulmologija" workplace = "KBC 'Dragiša Mišović'"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Nataša Dragutinović" speciality = "spec. pedijatrije / gastroenterologija" workplace = "UDK 'Tiršova'"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Milan Vidaković" speciality = "spec. ORL / otorinolaringologija" workplace = "KBC 'Zemun'"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Prof. Dr Petar Ivanovski" speciality = "spec. pedijatrije / hematologija" workplace = "UDK 'Tiršova'"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Doc. Dr Dušan Paripović" speciality = "spec. pedijatrije / nefrologija" workplace = "UDK 'Tiršova'"/>
                    </div>
                    <div className = "col-md-6 mb-4">
                        <ColaboratorsCard  title = "Dr Mišela Raus" speciality = "spec. pedijatrije / neonatologija" workplace = "UDK 'Tiršova'"/>
                    </div>
                </div>
            </div>   
        </Fragment>
    )
}

export default Colaborators;