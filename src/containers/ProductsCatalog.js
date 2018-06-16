import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../components/Product';
import { addToCart } from '../actions';
import GridList from '../styled/GridList';
import { isProductInCart } from '../helpers';

class ProductsCatalog extends Component {

  addProductToCart = (product) => {
    this.props.addToCart(product.id)
  };

  render() {
    const { products, cart } = this.props;

    return (
      <GridList>
      {products.map(product => (
        <Product
          product={product}
          key={product.id}
          inCart={isProductInCart(product, cart)}
          onButtonClick={this.addProductToCart}
        />
      ))}
      </GridList>
    );
  }
}


export default connect(
  state => ({
    products: state.products,
    cart: state.cart,
  }),
  dispatch => bindActionCreators({
    addToCart
  }, dispatch)
)(ProductsCatalog);
