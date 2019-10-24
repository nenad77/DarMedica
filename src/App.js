import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages';
import PriceListPage from './pages/priceList';
import PartnersPage from './pages/partnersPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/index" component = {IndexPage}/>  
          <Route exact path = "/cenovnik" component = {PriceListPage}/> 
          <Route exact path = "/konsultanti" component = {PartnersPage}/> 
        </Switch>
      </Router>
    )
  }
}

export default App;
