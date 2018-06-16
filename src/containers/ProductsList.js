import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart } from '../actions';
import ProductListItem from '../components/ProductListItem';
import { getProductsInCart } from '../selectors';


class ProductsList extends Component {

  removeProductFromCart = (product) => {
    
    this.props.removeFromCart(product.id)
  };

  render() {

    const { productsInCart: products } = this.props;

    return (
      <ul>
      {products.map(product => (
        <ProductListItem
        product={product}
        key={product.id}
        onButtonClick={this.removeProductFromCart}
        />
      ))}
      </ul>
    );
  }
}


export default connect(
  state => ({
    productsInCart: getProductsInCart(state),
  }),
  dispatch => bindActionCreators({
    removeFromCart
  }, dispatch)
)(ProductsList);
