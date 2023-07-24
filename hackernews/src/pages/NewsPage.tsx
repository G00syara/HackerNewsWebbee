import React from 'react';
import { Link } from 'react-router-dom';
import HackerNewsForm from '../components/HackerNewsMainPage/HackerNewsForm/HackerNewsForm';
import { Navbar, StyledLink } from '../UI/Navbar/Navbar';

const NewsPage: React.FC = () => {
  return (
    <>
      <Navbar>
        <StyledLink to="/">Хэканьюс</StyledLink>
      </Navbar>
      <HackerNewsForm />
    </>
  );
};

export default NewsPage;
