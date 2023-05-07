import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import css from '../modal/modal.module.css';

const Modal = ({ onModalClick, children }) => {
  const onESCClick = useCallback(
    ({ code, target, currentTarget }) => {
      if (code === 'Escape') {
        onModalClick(target, currentTarget);
      }
    },
    [onModalClick]
  );

  const hideModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onModalClick(target, currentTarget);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onESCClick);
    return () => {
      window.removeEventListener('keydown', onESCClick);
    };
  }, [onESCClick]);

  return (
    <div className={css.Overlay} onClick={hideModalClick} data-action="overlay">
      <div className={css.Modal}>{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
};
