import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apikey } from '../utils/config';
import MovieDetail from '../components/MovieDetail';

export default function Details() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    requestMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestMovieDetail() {
    const baseURL = `http://www.omdbapi.com/?apikey=${apikey}&i=${id}&plot=full`;
    try {
      const response = await axios.get(baseURL);
      if (response.data.Response === 'True') {
        setMovieDetail(response.data);
      } else {
        setMovieDetail({});
      }
    } catch {
      setMovieDetail({});
      console.log('There was a problem or request was cancelled.');
    }
  }

  return <MovieDetail detail={movieDetail} />;
}
