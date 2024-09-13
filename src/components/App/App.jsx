
import './App.css'
import { useEffect, useState, useRef, forwardRef } from "react";
import { fetchArticlesWithTopic } from '../../articles-api';
import SearchForm from '../SearchForm/SearchForm'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';




export default function App() {
  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <ErrorMessage />
      <Loader />
      <ImageModal />
      <ImageGallery />
      <LoadMoreBtn />
    </div>
  )

}


