import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBox = styled.div`
  margin: 0;
  border: 1px solid #ddd;
  color: #333;
  text-align: center;
  width: auto;
  background: #fff;
  position: absolute;
  top: 50%;
  right: 20%;

  .enter {
    opacity: 0;
  }
  .enter-active {
    transition: opacity 200ms ease-in-out;
    opacity: 1;
  }
  .enter-done {
    opacity: 1;
  }
  .exit {
    opacity: 1;
  }
  .exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .exit-done {
    opacity: 0;
  }
`;

const CloseButton = styled.button`
  background: ${(props) => (props.primary ? '#d84949' : 'transparent')};
  color:  ${(props) => (props.primary ? 'white' : '#d84949')};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid lightcoral;
  border-radius: 3px;
`;

function Modal({ onOpen, content, onClose }) {
  const [aniClassName, setAniClassName] = useState('');
  const onTransitionEnd = () => {
    setAniClassName(onOpen ? 'enter-done' : 'exit-done');
  };

  useEffect(() => {
    if (onOpen) {
      setAniClassName('enter');
      setTimeout(() => {
        setAniClassName('enter-active');
      });
    } else {
      setAniClassName('exit');
      setTimeout(() => {
        setAniClassName('exit-active');
      });
    }
  }, [onOpen]);

  if (!onOpen) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <ModalBox className={`modal ${aniClassName}`} onTransitionEnd={onTransitionEnd}>
      <div className="modal-content">{content}</div>
      <CloseButton className="modal-close-btn" onClick={handleClose} primary>
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
};
