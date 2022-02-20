import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBox = styled.div`
  padding: .5em;
  border-radius: .5rem;
  box-shadow: 1px 4px 4px #f1dddd;
  text-align: center;
  background: #fffdfd;
  position: absolute;
  top: 30%;
  right: 30%;
`;

const CloseButton = styled.button`
  background: ${(props) => (props.primary ? '#d84949' : 'transparent')};
  color:  ${(props) => (props.primary ? 'white' : '#d84949')};
  font-size: .8em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid lightcoral;
  border-radius: 3px;
`;

function Modal({
  onOpen, children, onClose, top, left,
}) {
  if (!onOpen) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <ModalBox style={{ top, left }}>
      <div>{children}</div>
      <CloseButton onClick={handleClose} primary>
        Close
      </CloseButton>
    </ModalBox>,
    document.getElementById('root'),
  );
}

export default Modal;

Modal.propTypes = {
  onOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};
