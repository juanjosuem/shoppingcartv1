import React, { Component } from 'react';
import ProductBox from './Product/ProductBox';
import CounterCart from './CounterCart';

import 'bootstrap/dist/css/bootstrap.min.css';

class Catalog extends Component {

  onAddToCart(product, event) {
    event.preventDefault();

    let itemFound = this.props.itemsInCart.find(item => (item.id === product.id));
    
    if (itemFound) {
      const confirmation = window.confirm('This item is already added in the cart, Quantity:' + itemFound.quantity + ', Do you want to add once more?');

      if (confirmation) {
        this.props.onAddToCart(product, true);
      }
    } else {
      this.props.onAddToCart(product);
    }
  }

  render() {
    const { products, itemsInCart } = this.props;
    return (
      <div className="container">
        <nav className="navbar sticky-top navbar-light bg-light">
          <a className="navbar-brand" href="#">Products</a>
          <CounterCart itemsInCart={itemsInCart} />
        </nav>

        <div className="row">
          {products.map(product =>
            <ProductBox
              key={product.id} {...product}
              viewLink={"/catalog/" + product.id}
              onAddToCart={this.onAddToCart.bind(this, product)} />)
          }
        </div>
      </div>
    );
  }
}

export default Catalog;
