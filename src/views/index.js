import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './HomeView';
import Cart from './CartView';
import Checkout from './CheckoutView';
import Product from './ProductView';
import { homeUrl, productUrl, cartUrl, checkoutUrl } from './urls';

export default function() {
	return (
		<Router>
			<div>
				<Route exact path='/' render={() => (
					<Redirect to={homeUrl} />
				)} />
				{/* <Route exact path={welcomeUrl} component={Welcome} /> */}

				<Route path={homeUrl} component={Home} />
				<Route path={productUrl} component={Product} />
				<Route exact path={cartUrl} component={Cart} />
				
				<Route exact path={checkoutUrl} component={Checkout} />
			</div>
		</Router>
	)
}