import styled from 'styled-components';
import { flexCenter } from './styledUtils';

export default styled.div`
	margin: 0;
	top: 0;
	left: 0;
	position: fixed;
	width: 100vw;
	height: 100vh;
	${flexCenter};
	background: rgba(0, 0, 0, 0.7);
	z-index: 1;
`