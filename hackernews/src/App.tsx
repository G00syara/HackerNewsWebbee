import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../src/router/AppRouter';
import Navbar from './UI/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
