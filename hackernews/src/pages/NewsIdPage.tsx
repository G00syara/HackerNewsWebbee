import React from 'react';
import HackerNewsIdForm from '../components/HackerNewsIdPage/HackerNewsIdForm/HackerNewsIdForm';
import Navbar from '../UI/Navbar/Navbar';

const NewsIdPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HackerNewsIdForm />
    </>
  );
};

export default NewsIdPage;
