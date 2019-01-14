import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Terms from './components/Terms';
import AllProducts from './components/AllProducts';
import Product from './components/Product';
import Category from './components/Category';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsOnCart: [],
      openClose: false
    }

    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.openCart = this.openCart.bind(this);
    this.closeCart = this.closeCart.bind(this); 
  }

  openCart() {
    this.setState({
      openClose: true
    })
  }

  closeCart() {
    this.setState({
      openClose: false
    })
  }

  addToCart(item) {
    let differentItems = this.state.itemsOnCart.every(itemOnCart => itemOnCart._id !== item._id);
    if(differentItems) {
      this.setState({
        itemsOnCart: [...this.state.itemsOnCart, item]
      });
    }
  }

  deleteFromCart(item) {
    let newItems = this.state.itemsOnCart.filter(itemOnCart => itemOnCart._id !== item._id)
    this.setState({
      itemsOnCart: newItems
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar openCart={this.openCart} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          <Route path="/all-products" component={AllProducts} />
          <Route path="/product/:productId" 
          render={props => <Product {...props} addToCart={this.addToCart} />} />
          <Route path="/category/:categoryType" component={Category} />
        </Switch>
        <Footer />
        <ShoppingCart itemsOnCart={this.state.itemsOnCart} 
        deleteFromCart={this.deleteFromCart} 
        openClose={this.state.openClose}
        closeCart={this.closeCart} />
      </React.Fragment>
    );
  }
}

export default App;
