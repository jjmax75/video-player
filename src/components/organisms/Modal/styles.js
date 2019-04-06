import styled from 'styled-components';

const CloseButton = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 48px;
	justify-content: center;
	position: absolute;
	right: 0px;
	top: 0px;
	width: 48px;
`;

const Modal = styled.div`
	align-items: center;
	background-color: white;
	display: flex;
	height: 90vh;
	justify-content: center;
	left: 5vw;
	position: fixed;
	top: 5vh;
	width: 90vw;
`;

export { CloseButton, Modal };
