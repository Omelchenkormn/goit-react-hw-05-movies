import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { createAsyncPage } from './services/createAsyncView';

const Home = createAsyncPage('Home/Home');
const MoviesPage = createAsyncPage('MoviesPage/MoviesPage');
const MovieDetails = createAsyncPage('MovieDetails/MovieDetails');
const Cast = createAsyncPage('Cast/Cast');
const Reviews = createAsyncPage('Reviews/Reviews');
const NotFoundPage = createAsyncPage('NotFoundPage/NotFoundPage');

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
