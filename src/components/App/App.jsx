import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('pages/HomePage'));
const Psychologists = lazy(() => import('pages/PsychologistsPage'));
const Favorites = lazy(() => import('pages/FavoritesPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="psychologists" element={<Psychologists />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} to={'/'} />
      </Route>
    </Routes>
  );
};

export default App;
