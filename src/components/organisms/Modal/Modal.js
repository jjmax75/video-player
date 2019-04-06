import React from 'react';
import ReactDom from 'react-dom';

import * as s from './styles';

const modalRoot = document.querySelector('#modal');

const closeButton = (
	<svg
		width="24"
		height="24"
		viewPort="0 0 24 24"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line x1="1" y1="24" x2="24" y2="1" stroke="black" stroke-width="3" />
		<line x1="1" y1="1" x2="24" y2="24" stroke="black" stroke-width="3" />
	</svg>
);

const Modal = props =>
	ReactDom.createPortal(
		<s.Modal>
			<s.CloseButton onClick={props.closeModal}>{closeButton}</s.CloseButton>
			{props.children}
		</s.Modal>,
		modalRoot,
	);

export default Modal;
