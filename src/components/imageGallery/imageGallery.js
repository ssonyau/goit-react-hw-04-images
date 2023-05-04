import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem.js';
import css from '../imageGallery/imageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
