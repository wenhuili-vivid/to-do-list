import React, { useState, useEffect } from 'react';
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
  font-size: .8em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid lightcoral;
  border-radius: 3px;
`;

function Modal({ onOpen, content, onClose }) {
  const [animationClassName, setAnimationClassName] = useState('');
  const onTransitionEnd = () => {
    setAnimationClassName(onOpen ? 'enter-done' : 'exit-done');
  };

  useEffect(() => {
    if (onOpen) {
      setAnimationClassName('enter');
      setTimeout(() => {
        setAnimationClassName('enter-active');
      });
    } else {
      setAnimationClassName('exit');
      setTimeout(() => {
        setAnimationClassName('exit-active');
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
    <ModalBox className={`${animationClassName}`} onTransitionEnd={onTransitionEnd}>
      <div>{content}</div>
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
  content: PropTypes.element.isRequired,
};
