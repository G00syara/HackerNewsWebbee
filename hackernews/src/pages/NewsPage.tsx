import React from 'react';
import HackerNewsForm from '../components/HackerNewsMainPage/HackerNewsForm/HackerNewsForm';
import Navbar from '../UI/Navbar/Navbar';

const NewsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HackerNewsForm />
    </>
  );
};

export default NewsPage;
