import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { green } from './styledPalette';

export default styled(Link)`
	color: ${green};
	text-decoration: none;
	font-weight: 700;
	&:hover {
		${props => !props.nounderline && (`
		text-decoration: underline;
	`)}
	}
`;