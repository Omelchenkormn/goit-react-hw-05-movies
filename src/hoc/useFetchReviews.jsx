import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/services/api';
import { useState, useEffect } from 'react';

export const useFetchRewiews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);
  return { reviews };
};
