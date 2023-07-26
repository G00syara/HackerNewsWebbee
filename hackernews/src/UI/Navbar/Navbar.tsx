import React from 'react';
import { fetchCurrentNews, fetchNews } from '../../store/action/news';
import { ButtonRefreshDataAPI } from '../Button/Buttons';
import { NavbarStyle, StyledLink } from './Navbar.styled';

const Navbar = () => {
  return (
    <NavbarStyle>
      <StyledLink to="/">Хэканьюс</StyledLink>
    </NavbarStyle>
  );
};

export default Navbar;
