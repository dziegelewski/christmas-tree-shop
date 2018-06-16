import React, { Component } from 'react';
import Container from '../styled/Container';
import Heading from '../styled/Heading';
import { ButtonLink } from '../styled/Button';
import { homeUrl } from './urls';

class WelcomeView extends Component {
	render() {
		return (
			<Container>
				<Heading center>Welcome<br/>to our<br/>shop</Heading>
				<ButtonLink to={homeUrl}>
					Start shopping
				</ButtonLink>

			</Container>	
		)
	}
}

export default WelcomeView;