import React from 'react';
import { Link } from 'react-router-dom';
import HackerNewsIdForm from '../components/HackerNewsIdPage/HackerNewsIdForm/HackerNewsIdForm';
import { Navbar, StyledLink } from '../UI/Navbar/Navbar';

const NewsIdPage: React.FC = () => {
  return (
    <>
      <Navbar>
        <StyledLink to="/">Хэканьюс</StyledLink>
      </Navbar>
      <HackerNewsIdForm />
    </>
  );
};

export default NewsIdPage;
