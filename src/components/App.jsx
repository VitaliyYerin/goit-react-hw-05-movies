import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Home = lazy(() =>
  import('pages/HomePage')
);
const Movies = lazy(() =>
  import('pages/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() =>
  import('./Cast/Cast')
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews')
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading Films...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
