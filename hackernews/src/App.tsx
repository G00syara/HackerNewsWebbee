import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import type {} from 'redux-thunk/extend-redux';
import HackerNewsForm from './components/HackerNewsForm/HackerNewsForm';
import { useTypesSelector } from './hooks/useTypeSelector';
import { fetchNews } from './store/action/news';

const App: React.FC = () => {
  return (
    <>
      <HackerNewsForm />
    </>
  );
};

export default App;
