import { useState, useEffect } from 'react';
import { fetchPopListMovies } from 'components/services/api';
import {
  Container,
  ListItems,
  ListTitle,
  Image,
  Card,
  Header,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchPopListMovies().then(setMovies);
  }, []);

  return (
    <Container>
      <Header>Trending today</Header>
      <Card>
        {movies &&
          movies.map(movie => (
            <ListItems key={movie.id}>
              <ListTitle to={`/movies/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
                {movie.original_title}
              </ListTitle>
            </ListItems>
          ))}
      </Card>
    </Container>
  );
};
export default Home;
