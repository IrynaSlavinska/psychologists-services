import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/Home';
import { PsychologistsPage } from 'pages/Psychologists';
import { FavoritePage } from 'pages/Favorite';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="psychologists" element={<PsychologistsPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
