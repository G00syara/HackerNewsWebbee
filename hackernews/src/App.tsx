import React from 'react';
import NewsPage from './pages/NewsPage';
import { BrowserRouter } from 'react-router-dom';
import NewsIdPage from './pages/NewsIdPage';
import AppRouter from '../src/router/AppRouter';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
