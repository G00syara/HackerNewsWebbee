import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NewsPage from '../pages/NewsPage';
import NewsIdPage from '../pages/NewsIdPage';
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/item/:id" element={<NewsIdPage />} />
        <Route path="/" element={<NewsPage />} />
        <Route path="*" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
