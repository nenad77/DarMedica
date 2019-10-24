import React, {Fragment, Component } from 'react';
import './PriceList.scss';
import heroImg from '../../img/PriceList/hero.jpg';

class PriceList extends Component {
   constructor(props) {


    function PriceTable (number, desc, price) {
        this.number = number;
        this.desc = desc;
        this.price = price;
    };

    
    var tr1 = new PriceTable(1, "Specijalistički pedijatrijski pregled bolesnog deteta - prvi", "4000,00");
    var tr2 = new PriceTable(2, "Kontrolni specijalistički pregled bolesnog deteta (do 14 dana)", "2500,00");
    var tr3 = new PriceTable(3, "Specijalistički pedijatrijski pregled zdravog deteta", "4000,00");
    var tr4 = new PriceTable(4, "Specijalistički pedijatrijski pregled pred vakcinaciju", "3500,00");
    var tr5 = new PriceTable(5, "Specijalistički pedijatrijski pregled neonatusa do 45 dana zivota", "5000,00");
    var tr6 = new PriceTable(6, "Konsultativni specijalistički/subspecijalistički pregled pedijatra - prvi", "5000,00");
    var tr7 = new PriceTable(7, "Konsultativni specijalistički/ subspecijalistički pregled pedijatra - kontrolni (do 14 dana)", "3000,00");
    var tr8 = new PriceTable(8, "Konsultativni pregled Profesora ili Docenta - prvi", "6000,00");
    var tr9 = new PriceTable(9, "Kontrolni pregled Profesora ili Docenta (do 14 dana)", "4000,00");
    var tr10 = new PriceTable(10, "Specijalistički pedijatrijski pregled - prvi (nedeljom i državnim praznikom)", "5000,00");
    var tr11 = new PriceTable(11, "Bris grla (brzi test na Streptokok A) - Strep A test", "1200,00");
    var tr12 = new PriceTable(12, "Bris grla", "600,00");
    var tr13 = new PriceTable(13, "Bris nosa", "600,00");
    var tr14 = new PriceTable(14, "Bris kože", "600,00");
    var tr15 = new PriceTable(15, "Bris genitalija kod dece", "600,00");
    var tr16 = new PriceTable(16, "Ordiniranje vakcine", "800,00");
    var tr17 = new PriceTable(17, "Ordiniranje IM injekcije", "1000,00");
    var tr18 = new PriceTable(18, "Ordiniranje AB terapije IM (Penicilin/Ceftriakson)", "1500,00");
    var tr19 = new PriceTable(19, "Ordiniranje AB terapije u IV bolusu", "2000,00");
    var tr20 = new PriceTable(20, "Ordiniranje infuzionog rastvora", "2500,00");
    var tr21 = new PriceTable(21, "Inhalacija lekom", "1000,00");
    var tr22 = new PriceTable(22, "Previjanje (obrada) rane", "2000,00");
    var tr23 = new PriceTable(23, "Kućna poseta (zona I )", "6000,00");
    var tr24 = new PriceTable(24, "Kućna poseta (zona II )", "8000,00");
    var tr25 = new PriceTable(25, "Kućna poseta (zona III)", "10000,00");

    
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         priceList: [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11, tr12, tr13, tr14, tr15, tr16, tr17, tr18, tr19, tr20, tr21, tr22, tr23, tr24, tr25]
      }
   }

    renderTableData() {
        return this.state.priceList.map((priceMed, index) => {
        const { number, desc, price } = priceMed //destructuring
        return (
            
            <tr key={number}>
                <td>{number}</td>
                <td>{desc}</td>
                <td>{price}</td>
            </tr>
        )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.priceList[0])
        return header.map((key, index) => {
           return <th scope="col" key={index}>{key}</th>
        })
     }
  
     render() {
        return (
            <Fragment>
                <div className = "container-fluid">
                    <div className = "row mb-5">
                        <img className = "w-100" src = {heroImg} alt = "payment" />
                    </div>
                </div>
                <div className = "container">
                    <div className = "row flex-column text-center p-5">
                        <h1>Cenovnik</h1>
                        <h3>Specijalistička pedijatrijska ordinacija Dar Medica</h3>
                    </div>
                    <div className = "table-responsive-sm">
                        <table id='priceList' className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Red. Br.</th>
                                    <th scope="col">Opis usluge</th>
                                    <th scope="col">Cena usluge u RSD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
     }
}



export default PriceList; //exporting a component make it reusable and this is the beauty of react