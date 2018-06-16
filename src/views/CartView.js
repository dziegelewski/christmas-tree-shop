import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsSummary from '../containers/ProductsSummary';
import { getTotalPrice, getNumberOfProductsInCart } from '../selectors';
import { Button, ButtonLink } from '../styled/Button';
import Heading from '../styled/Heading';
import { homeUrl/*, checkoutUrl*/ } from '../views/urls';
import { setDocumentTitle } from '../helpers';
import OverlayPage from '../components/OverlayPage';
import Purchased from '../components/Purchased';
import pluralize from 'pluralize';
import { purchaseCart } from '../actions';


class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false,
    }
  }

  purchase = () => {
    this.setState({
      purchased: true,
    });
    this.props.purchaseCart();
  }

	render() {
    const { purchased } = this.state;
		const { numberOfProductsInCart } = this.props;
    const anyProductsInCart = numberOfProductsInCart > 0;

    if (purchased) {
      return (
        <OverlayPage small>
          <Purchased />
        </OverlayPage>
      )
    }

    if (anyProductsInCart) {
  		return (
        <OverlayPage>
            <Heading>You have {pluralize('product', numberOfProductsInCart, true)} in your cart</Heading>

            <ProductsSummary />

            <Button onClick={this.purchase}>
              Purchase
            </Button>
       </OverlayPage>
  		);
    } else {
      return (
        <OverlayPage small>
          <Heading>Your cart is empty</Heading>

          <ButtonLink to={homeUrl}>
            Go back to shopping!
          </ButtonLink>
       </OverlayPage>
     );
    }

	}

  componentWillMount() {
    setDocumentTitle('Cart');
  }
}

export default connect(
	state => ({
    numberOfProductsInCart: getNumberOfProductsInCart(state),
    totalPrice: getTotalPrice(state),
  }),
  dispatch => bindActionCreators({ purchaseCart }, dispatch),
)(CartView);


