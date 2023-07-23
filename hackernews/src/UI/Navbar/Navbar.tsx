import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar__links">
        <Link to="/"> О сайте </Link>
        <Link to="/:id"> Посты </Link>
      </div>
    </div>
  );
};

export default Navbar;
