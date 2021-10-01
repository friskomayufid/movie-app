import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Modal from '../components/Modal';
import SearchMovie from '../components/SearchMovie';
import { changeMovie } from '../redux/movie/action';
import { apikey } from '../utils/config';
import MovieList from '../components/MovieList';

function Home() {
  const movie = useSelector((state) => state.movie);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [poster, setPoster] = useState('');
  const [hasMore, setHasMore] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    let cancel;

    axios({
      method: 'GET',
      url: `https://www.omdbapi.com/?apikey=${apikey}&s=${movie}&page=${page}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        if (response.data.Response === 'True') {
          if (page > 1) {
            setMovies([...movies, ...response.data.Search]);
          } else {
            setMovies(response.data.Search);
          }

          if (page >= Math.ceil(response.data.totalResults / 10)) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }

          setLoading(false);
        } else {
          setLoading(false);
          console.log('There was a problem or request was cancelled.');
        }
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        console.log('There was a problem or request was cancelled.');
      });
    return () => cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie, page]);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((page) => page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleChange = (e) => {
    dispatch(changeMovie(e.target.value));
    setPage(1);
  };

  const handlePoster = (poster) => {
    setShow(true);
    setPoster(poster);
  };

  return (
    <Container>
      <SearchMovie handleChange={handleChange} movie={movie}/>
      <MovieList movies={movies} handlePoster={handlePoster} />
      <div className="loading" ref={lastBookElementRef}>
        <h2 style={{ textAlign: 'center' }}>...</h2>
      </div>
      <Modal show={show} poster={poster} handleClose={() => setShow(false)} />
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
  max-width: 1280px,
  margin: 0 auto,
`;

export default Home;
