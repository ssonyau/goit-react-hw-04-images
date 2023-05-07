import {api} from "../../api/Api"
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import React, { useState, useEffect, useRef } from 'react'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import Loader from '../Loader/Loader'; 
import css from './ImageGallery.module.css';

const ImageGallery = (props)=>{
  const [itemsArray, setItemsArray] = useState([])
  const [pageCounter, setPageCounter] = useState(1)
  const [loading, setLoading] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [modalState, setModalState] = useState(false)

  const prevSearchWordRef = useRef();
  
  const addPage = () => {
    setPageCounter(prevState=>prevState + 1)
  }

  const pushItemsArray=(arr)=>{
    setItemsArray(prevState=>[...prevState,...arr])
  }

  const displayModal = ({ link, desc }) => {
    setModalContent({ link, desc })
    setModalState(true)
  }

  const closeModal = () => {
    setModalContent(null)
    setModalState(false)
  }

  useEffect(() => {
    const handleSearch = (searchWord,page)=>{
      setLoading(true)
      api(searchWord, page)
        .then((arr) => {
          pushItemsArray(arr);
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        });
    }
    if (props.searchWord !== '') {
      setItemsArray([]);
      setPageCounter(1);
      prevSearchWordRef.current = props.searchWord;
      handleSearch(props.searchWord, 1);
    }
  }, [props.searchWord]);

  useEffect(() => {
    const handleSearch = (searchWord,page)=>{
      setLoading(true)
      api(searchWord, page)
        .then((arr) => {
          pushItemsArray(arr);
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        });
    }
    if (pageCounter > 1) {
      handleSearch(prevSearchWordRef.current, pageCounter);
    }
  }, [pageCounter]);

  return (
    <>
      <ul className={css.ImageGallery}>
        {itemsArray.length>0 && itemsArray.map((el)=>(
          <ImageGalleryItem key={el.id} src={el.webformatURL} desc={el.id} largeImageURL={el.largeImageURL} displayModal={displayModal}/>
        ))}
      </ul>
      {loading && <Loader />}
      {props.searchWord && itemsArray.length>0 && <Button addPage={addPage} />}
      {modalContent && ( 
        <Modal
          link={modalContent.link}
          alt={modalContent.desc}
          modalState={modalState} 
          closeModal={closeModal}
        />
      )}
    </>
  )
}

export default ImageGallery
