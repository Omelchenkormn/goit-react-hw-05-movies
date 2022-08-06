import { fetchMoviesForKeyWorld } from 'components/services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFetchListMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [valueSearch, setValueSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const moveQuery = searchParams.get('query') || '';

  useEffect(() => {
    if (moveQuery === '') {
      return;
    }
    fetchMoviesForKeyWorld(moveQuery)
      .then(data => {
        setSearchQuery(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [moveQuery]);

  const searchHandler = query => {
    setValueSearch(query);
    setSearchParams({ query: query });
  };

  return { searchQuery, searchHandler };
};
