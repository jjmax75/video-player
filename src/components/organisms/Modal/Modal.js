import ReactDom from 'react-dom';

const modalRoot = document.querySelector('#modal');

const Modal = props => ReactDom.createPortal('this is a modal', modalRoot);

export default Modal;
