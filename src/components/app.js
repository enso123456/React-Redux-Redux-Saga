import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Product from './Product/Product';
import '../../style/style.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h5>Product Hunt</h5>
        <hr />
        <div>
          <Product />
        </div>
      </div>
    );
  }
}
