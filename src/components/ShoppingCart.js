import React, { Component } from 'react';
import '../css/ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    return (
      <aside>
        <div className={(this.props.openClose)?"ShoppingCart is-visible":"ShoppingCart"}>
          <header className="ShoppingCart__header">
            <button className="ShoppingCart__close" onClick={this.props.closeCart}>
              <i className="fas fa-window-close"></i>
            </button>
            <h3 className="ShoppingCart__title">Your Cart</h3>
          </header>
          <div>
            <ul className="ShoppingCart__list">
            {
              this.props.itemsOnCart.map(item => {
                return(
                  <li className="Grid Item" key={item._id}>
                    <div className="Item__Delete">
                      <button onClick={() => this.props.deleteFromCart(item)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                    <div className="Item__Cover">
                      <img src={item.imageLink} alt="Item Cover"/>
                    </div>
                    <div className="Item__Description">
                      <h3>{item.item}</h3>
                      <p>${item.price}</p>
                    </div>
                  </li>
                );
              })
            }
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default ShoppingCart;