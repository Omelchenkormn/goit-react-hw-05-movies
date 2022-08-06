import { Container, List, Img, Name, Character } from './Cast.styled';
import defImg from './profileNotFound.png';
import { useFetchCast } from 'hoc/useFetchCast';

const Cast = () => {
  const { castActors } = useFetchCast();
  return (
    <>
      {castActors && (
        <Container>
          {castActors.map(actor => (
            <List key={actor.id}>
              <Img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : `${defImg}`
                }
                alt="actor.original_name"
                width="250"
              />
              <Name>{actor.original_name}</Name>
              <Character>Character: {actor.character}</Character>
            </List>
          ))}
        </Container>
      )}
    </>
  );
};
export default Cast;
