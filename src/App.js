import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages';
import PriceListPage from './pages/priceList';
import PartnersPage from './pages/partnersPage';
import DirectionPage from './pages/directionPage';
import ServicePage from './pages/servicePage';
import ServiceDesc from './Components/ServiceDesc/ServiceDesc';
import ServiceDescPregledi from './Components/ServiceDesc/ServiceDescPregledi';
import ServiceDescSaveti from './Components/ServiceDesc/ServiceDescSaveti';
import ServiceDescVakcina from './Components/ServiceDesc/ServiceDescVakcina';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {IndexPage}/>  
          <Route exact path = "/cenovnik" component = {PriceListPage}/> 
          <Route exact path = "/konsultanti" component = {PartnersPage}/> 
          <Route exact path = "/kako-do-nas" component = {DirectionPage}/>
          <Route exact path = "/usluge" component = {ServicePage}/>
          <Route exact path = "/akutna" component = {ServiceDesc}/>
          <Route exact path = "/pregledi" component = {ServiceDescPregledi}/>
          <Route exact path = "/saveti" component = {ServiceDescSaveti}/>
          <Route exact path = "/vakcina" component = {ServiceDescVakcina}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
