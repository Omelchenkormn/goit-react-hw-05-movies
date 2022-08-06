import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchOneMovieId } from '../components/services/api';

export const useFethcMovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchOneMovieId(movieId).then(setMovie);
  }, [movieId]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return { movie, goBack };
};
