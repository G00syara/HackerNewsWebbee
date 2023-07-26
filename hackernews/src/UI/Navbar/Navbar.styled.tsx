import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.5em 1.5em;
  background-color: orange;
  border-width: 0;
  border-bottom: 2px solid #a0a0a0;
  border-radius: 0.4em;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  font-family:
    Andale Mono,
    monospace;
  font-size: 16px;
  font-weight: 400;
  color: black;
  &:hover {
    color: lightgray;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
