import React from 'react';
import ServiceCard from './SeviceCard/ServiceCard';
import bandaid from '../../img/home/service-icons/band-aid-solid.svg';
import stehoscope from '../../img/home/service-icons/stethoscope-solid.svg';
import syringe from '../../img/home/service-icons/syringe-solid.svg'
import users from '../../img/home/service-icons/users-solid.svg'

const ServiceHome = () => {


    return (

        <div className = "container-fluid">
            <div className = "row">
                <ServiceCard className = "service-acute" title = "Akutna stanja"  desc = "Brinemo o deci kada je to najpotrebnije. U slučajevima kada se razbole, daćemo sve od sebe da pregled zakažemo što je pre moguće, a u nekim slučajevima moguće su I kućne posete." icon={`${bandaid}`} serviceNavLink="/akutna" />

                <ServiceCard className = "service-exams" title = "Preventivni pregledi"  desc = "Pregledi zdrave dece (sistematski pregledi) su jako važni, radi praćenja rasta i razvoja, prevencije pojave bolesti, i blagovremenog otkrivanja eventualnih poremećaja zdravlja." icon={`${stehoscope}`} serviceNavLink="/pregledi"/>

                <ServiceCard className = "service-acute" title = "Savetovalište"  desc = "Želimo da budemo tu za Vas i Vašu decu i pružamo usluge savetovališta čak i za buduće roditelje. U savetovalištu se pruža zdravstveno vaspitni rad i podrška roditeljima i deci" icon={`${users}`} serviceNavLink="/saveti"/>

                <ServiceCard className = "service-exams" title = "Vakcinacija"  desc = "Imunizacija je proces stvaranja otpornosti i antitela na određene mikrooorganizme (bakterije ili viruse). Jedna od efikasnih načina imunizacije je aktivna imunizacija." icon={`${syringe}`} serviceNavLink="/vakcina"/>
            </div>
        </div>
    )
}

export default ServiceHome;