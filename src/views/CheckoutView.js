import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../styled/Container';
import Heading from '../styled/Heading';
import LinkStyled from '../styled/LinkStyled';
import { cartUrl } from './urls';
import ShippingData from '../components/ShippingData'

class CheckoutView extends Component {
	render() {

		console.log(this.props.state.form)

		return (
			<Container>
				<Heading>Checkout</Heading>
				<ShippingData />
				<LinkStyled to={cartUrl}>Go back to the cart</LinkStyled>


			</Container>
		)
	}
}

export default connect(
	state => ({ state })
)(CheckoutView)