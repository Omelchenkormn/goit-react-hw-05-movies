import { FormSearchMovies } from 'components/Form/FormSearchMovies';
import { Wraper, List, IMG, UL, Title, Links } from './MoviesPage.styled';
import { useFetchListMovies } from 'hoc/useFetchListMovies';
import defImg from './MovieDefault.png';

const MoviesPage = () => {
  const { searchQuery, searchHandler } = useFetchListMovies();

  return (
    <>
      <FormSearchMovies searchHandler={searchHandler} />
      <Wraper>
        {searchQuery && (
          <div>
            <UL>
              {searchQuery.map(item => (
                <Links to={`/movies/${item.id}`}>
                  <List key={item.id}>
                    <IMG
                      src={
                        item.backdrop_path
                          ? `https://image.tmdb.org/t/p/w200/${item.backdrop_path}`
                          : defImg
                      }
                      alt={item.original_title}
                    />
                    <Title>{item.original_title}</Title>
                  </List>
                </Links>
              ))}
            </UL>
          </div>
        )}
      </Wraper>
    </>
  );
};
export default MoviesPage;
