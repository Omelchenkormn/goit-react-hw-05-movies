import { Outlet } from 'react-router-dom';
import { useFethcMovieDetails } from 'hoc/useFetchMovieDetails';
import {
  Container,
  Header,
  Img,
  Info,
  TextScore,
  Genres,
  AddInformation,
  Link,
  Button,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movie, goBack } = useFethcMovieDetails();
  return (
    <>
      <Button onClick={goBack}>goBack</Button>
      {movie && (
        <Container>
          <Img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <Info>
            <Header>{movie.title}</Header>
            <TextScore>User Score: {movie.popularity}</TextScore>
            <Header>Overview:</Header>
            <TextScore>{movie.overview}</TextScore>
            <Genres>Genres</Genres>
            <TextScore>
              {movie.genres.map(item => (
                <li key={item.id}>{item.name} </li>
              ))}
            </TextScore>
            <h4>Additional Information</h4>
            <AddInformation>
              <Link to={`cast`}>Cast</Link>
              <Link to={`reviews`}>Reviews</Link>
            </AddInformation>
          </Info>
          <Outlet />
        </Container>
      )}
    </>
  );
};
export default MovieDetails;
