import React, { useState, useEffect} from 'react';
import { Oval } from 'react-loader-spinner';
import SearchBar from './searchBar/searchBar.js';
import ImageGallery from './imageGallery/imageGallery.js';
import LoadMoreBtn from './button/button.js';
import css from './app.module.css';
import fetch from '../fetch/fetchAPI.js';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(false);

  const onSearchSubmit = value => {
    setSearchValue(value);
    setNumberOfPage(1);
  };

  const incrementNumberOfPage = () => {
    setNumberOfPage(prev => prev + 1);
  };

  useEffect(() => {
    if (searchValue) {
      if (numberOfPage === 1) setImages([]);
      setIsLoading(true);
      fetch(searchValue, numberOfPage)
        .then(data => {
          setImages(prev => [...prev, ...data.data.hits]);
          setTotalHits(data.data.totalHits);
        })
        .catch(error => setError(true))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchValue, numberOfPage]);

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSearchSubmit} />
      {error && <h1>Please try again</h1>}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && images.length < totalHits && (
        <LoadMoreBtn onClick={incrementNumberOfPage} />
      )}
      {isLoading && (
        <Oval
          height={180}
          width={180}
          color="#3f51b5"
          secondaryColor="#3f51b5"
          wrapperClass="OvalWrapper"
        />
      )}
    </div>
  );
};
