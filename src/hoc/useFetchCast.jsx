import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/services/api';
import { useState, useEffect } from 'react';

export const useFetchCast = () => {
  const { movieId } = useParams();
  const [castActors, setCastActors] = useState(null);

  useEffect(() => {
    fetchCast(movieId)
      .then(cast => {
        if (cast.length === 0) {
          console.log('net dannih');
          return;
        }
        setCastActors(cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return { castActors };
};
