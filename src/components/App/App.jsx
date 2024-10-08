
import './App.module.css'
import { useState } from "react";
import SearchForm from '../SearchForm/SearchForm'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchArticlesWithTopic } from '../../unsplash-api'
import { Toaster } from "react-hot-toast";


export default function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchImages = async (query, page) => {
    setLoading(true);
    setError(null);
    try {
      const fetchedImages = await fetchArticlesWithTopic(query, page);
      if (page === 1) {
        setImages(fetchedImages);
      } else {
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
      }
    } catch (err) {
      setError("Error fetching images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster />
      <SearchForm onSubmit={handleSearchSubmit} />

      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={openModal} />

      {loading && <Loader />}

      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}


