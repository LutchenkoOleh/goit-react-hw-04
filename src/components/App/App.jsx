
import './App.css'
import { useEffect, useState, useRef, forwardRef } from "react";
import ArticleList from '../ArticleList/ArticleList';
import { fetchArticlesWithTopic } from '../../articles-api';
import SearchForm from '../SearchForm/SearchForm'
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { useMemo } from "react";




const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));



export default function App() {

  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return (
    <div>
      <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <ComponentA />
      <ComponentB />
    </div>);

  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false);

  // const handleSearch = async (topic) => {
  //   try {
  //     setArticles([])
  //     setError(false);
  //     setLoading(true);

  //     const data = await fetchArticlesWithTopic("react")

  //     setArticles(data)

  //   } catch (error) {

  //     setError(true)

  //   } finally {

  //     setLoading(false)

  //   }
  // }

  // return (
  //   <div>
  //     <SearchForm onSearch={handleSearch} />
  //     {loading && <Loader />}
  //     {error && <Error />}
  //     {articles.length > 0 && (
  //       <ArticleList items={articles} />
  //     )}
  //   </div>
  // );

}


