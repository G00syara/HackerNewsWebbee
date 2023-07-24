import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.5em 1.5em;
  font-size: 0.9em;
  background-color: orange;
  border-width: 0;
  border-bottom: 2px solid #a0a0a0;
  border-radius: 0.4em;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

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
