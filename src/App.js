import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ Cart } />
            <Route path="/product/:id" component={ ProductDetail } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
