import React, { Component } from 'react';
import ProductsCatalog from '../containers/ProductsCatalog';
import CartWidget from '../containers/CartWidget';
import Container from '../styled/Container';
import { setDocumentTitle } from '../helpers';


class Home extends Component {
  render() {
    return (
      <Container>
        <ProductsCatalog />
        <CartWidget />
      </Container>
    );
  }

  componentWillMount() {
		setDocumentTitle();
	}
}

export default Home;
