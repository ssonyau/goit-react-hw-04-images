import React, { useState } from 'react'


import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';

const App = () => {
const [searchWord, setSearchWord] = useState('')

  const onSubmit = (e)=>{
    e.preventDefault();
    setSearchWord(e.target.searchWord.value.trim())
    
    // this.setState({searchWord:e.target.searchWord.value.trim()})
  }
    return (
      <div className={css.App}>
  <Searchbar onSubmit={onSubmit} searchWord={searchWord}/>
     <ImageGallery searchWord={searchWord}/>
    </div>
    )
  
}

export {App};


