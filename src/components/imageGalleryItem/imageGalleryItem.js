import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from '../modal/modal.js';
import css from '../imageGalleryItem/imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = ({ target, currentTarget }) => {
    if (target === currentTarget) setShowModal(false);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => {setShowModal(true)}}
      />
      {showModal && (
        <Modal onModalClick={hideModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
