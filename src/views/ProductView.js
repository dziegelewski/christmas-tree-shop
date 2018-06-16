import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import OverlayPage from '../components/OverlayPage';
import { getProductById } from '../selectors';
import { addToCart } from '../actions';
import { bindActionCreators } from 'redux';
import { isProductInCart } from '../helpers';
import { setDocumentTitle } from '../helpers';

class ProductViews extends Component {

	product = null;

	addProductToCart = (product) => {
    this.props.addToCart(product.id)
  };

	render() {
		const { product } = this;
		const { cart } = this.props; 

		return (
			<OverlayPage>
					<Product
						product={product}
						fullpage
	          onButtonClick={this.addProductToCart}
	          inCart={isProductInCart(product, cart)}
					/>
			</OverlayPage>
		)
	}

	componentWillMount() {
		const { id } = this.props.match.params;
		this.product = getProductById(this.props.state, id);
		setDocumentTitle(this.product.name);
	}






}

export default connect(
	state => ({
		state,
		cart: state.cart,
	}),
	dispatch => bindActionCreators({
		addToCart
	}, dispatch)
)(ProductViews);