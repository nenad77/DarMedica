import React, {Fragment, Component } from 'react';
import heroImg from '../../img/PriceList/hero.jpg';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../img/colaborators/', false, '/\.png/'));

class PriceList extends Component {
   constructor(props) {


    function PriceTable (img, number, desc, price) {
        this.img = images + img;
        this.number = number;
        this.desc = desc;
        this.price = price;
    };

    
    var tr1 = new PriceTable("meda.png", "Dr Dragana Antić ", "spec. pedijatrije / opšta pedijatrija", "Dom zdravlja 'Novi Beograd'");
    var tr2 = new PriceTable(2, "Kontrolni specijalistički pregled bolesnog deteta (do 14 dana)", "2500,00");
    var tr3 = new PriceTable(3, "Specijalistički pedijatrijski pregled zdravog deteta", "4000,00");
    var tr4 = new PriceTable(4, "Specijalistički pedijatrijski pregled pred vakcinaciju", "3500,00");
    var tr5 = new PriceTable(5, "Specijalistički pedijatrijski pregled neonatusa do 45 dana zivota", "5000,00");
    var tr6 = new PriceTable(6, "Konsultativni specijalistički/subspecijalistički pregled pedijatra - prvi", "5000,00");
    var tr7 = new PriceTable(7, "Konsultativni specijalistički/ subspecijalistički pregled pedijatra - kontrolni (do 14 dana)", "3000,00");
    var tr8 = new PriceTable(8, "Konsultativni pregled Profesora ili Docenta - prvi", "6000,00");
    var tr9 = new PriceTable(9, "Kontrolni pregled Profesora ili Docenta (do 14 dana)", "4000,00");
    var tr10 = new PriceTable(10, "Specijalistički pedijatrijski pregled - prvi (nedeljom i državnim praznikom)", "5000,00");


    
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         colaborators: [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10]
      }
   }

    renderTableData() {
        return this.state.colaborators.map((colaborator, index) => {
        const { img, number, desc, price } = colaborator //destructuring
        return (
            
            <tr key={number}>
                <td><img src = {img} alt = "colaborators" /></td>
                <td>{number}</td>
                <td>{desc}</td>
                <td>{price}</td>
            </tr>
        )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.colaborators[0])
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
                    <div className = "table-responsive-sm m-5">
                        <table id='colaborators' className="table table-striped">
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