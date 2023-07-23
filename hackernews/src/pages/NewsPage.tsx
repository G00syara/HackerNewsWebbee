import React from 'react';
import HackerNewsForm from '../components/HackerNewsForm/HackerNewsForm';
import AppRouter from '../components/router/AppRouter';

const NewsPage: React.FC = () => {
  return (
    <>
      <h1>Хэканьюс</h1>
      <HackerNewsForm />
    </>
  );
};

export default NewsPage;
