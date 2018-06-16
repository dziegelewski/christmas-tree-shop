import styled from 'styled-components';

export default styled.img`

	max-width: 100%;

 ${props => {
		if (props.small) return `
			max-height: 150px;
			margin: 20px 0;
		`
		if (props.big) return `
			max-height: 300px;
			margin: 0 20px;
		`
		}
	}};

	align-self: center;
`