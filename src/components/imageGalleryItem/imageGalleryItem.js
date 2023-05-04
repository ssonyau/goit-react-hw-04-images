import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '../modal/modal.js';
import css from '../imageGalleryItem/imageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onModalClick={this.toggleModal}>
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
