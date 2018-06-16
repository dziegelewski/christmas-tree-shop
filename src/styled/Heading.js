import styled from 'styled-components';

export default styled.h1`
	font-weight: 600;
	font-variant: small-caps;
	font-size: 2em;

	${props => props.center && `
		text-align: center;
	`}
`