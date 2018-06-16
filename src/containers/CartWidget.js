import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkStyled from '../styled/LinkStyled'
import { getTotalPrice, getNumberOfProductsInCart } from '../selectors';
import Price from '../components/Price';
import { cartUrl } from '../views/urls';



class CartWidget extends Component {

	render() {
		const { numberOfProductsInCart, totalPrice } = this.props;

		if (!numberOfProductsInCart) {
			return null;
		}

		return (
			<LinkStyled to={cartUrl} nounderline="true">
			<div style={{
				boxSizing: 'border-box',
				textAlign: 'center',
				position: 'fixed',
				bottom: 0,
				right: 0,
				background: 'white',
				padding: '25px',
				opacity: 0.9,
				zIndex: 2,
			}}>
				<p>
					In cart: {numberOfProductsInCart} (<Price>{totalPrice}</Price>)
				</p>
			</div>
			</LinkStyled>
		)
	}
}

export default connect(
	state => ({
		numberOfProductsInCart: getNumberOfProductsInCart(state),
		totalPrice: getTotalPrice(state),
	})
)(CartWidget)

