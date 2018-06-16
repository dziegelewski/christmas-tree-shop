import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart } from '../actions';
import { getProductsInCart, getTotalPrice } from '../selectors';
import { Button } from '../styled/Button';
import Table from '../styled/Table';
import Price from '../components/Price';



class ProductsList extends Component {

  removeProductFromCart = (product) => {
    this.props.removeFromCart(product.id);
  };

  render() {

    const { productsInCart: products, totalPrice } = this.props;

    return (
      <Table>
      <thead>
        <tr>
        <td/>
        <td>Name</td>
        <td>Price</td>
        </tr>
      </thead>
      <tbody>
      {products.map(product => (
        <tr key={product.id}>
          <td>
            <Button
              borderless
              onClick={() => this.removeProductFromCart(product)}
            >
            &times;
            </Button>
          </td>
          <td>
            {product.name}
          </td>
          <td>
            <Price>{product.price}</Price>
          </td>
        </tr>
      ))}
      <tr>
        <td />
        <td><strong>Total price</strong></td>
        <td>
          <strong><Price>{totalPrice}</Price></strong>
        </td>
      </tr>
      </tbody>
      </Table>
    );
  }
}


export default connect(
  state => ({
    productsInCart: getProductsInCart(state),
    totalPrice: getTotalPrice(state),
  }),
  dispatch => bindActionCreators({
    removeFromCart
  }, dispatch)
)(ProductsList);
