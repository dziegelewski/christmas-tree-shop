import React, { Component } from 'react';
import Overlay from '../styled/Overlay';
import Container from '../styled/Container';
import CloseButton from '../components/CloseButton';
import { goHome } from '../helpers';

class OverlayPage extends Component {
	render() {
		return (
			<Overlay onClick={this.handleOverlayClick} className="outside-the-container">
				<Container small={this.props.small} >
					<CloseButton onClick={this.goHome} />
					{this.props.children}
				</Container>
			</Overlay>
		);
	}

	handleOverlayClick = (e) => {
		if (e.target.classList.contains('outside-the-container')) {
			this.goHome();
		}
	};

	handleEscKey = (e) => {
		if (e.key === 'Escape') {
			this.goHome();
		}
	};

	goHome = () => goHome(this);

	componentDidMount() {
		window.addEventListener('keydown', this.handleEscKey);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleEscKey);
	}


	static contextTypes = {
    router: () => null,
  }
}

export default OverlayPage;
