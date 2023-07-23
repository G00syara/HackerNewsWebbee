import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import type {} from 'redux-thunk/extend-redux';
import { useTypesSelector } from '../../hooks/useTypeSelector';
import { fetchNews } from '../../store/action/news';
import HackerNewsList from '../HackerNewsList/HackerNewsList';
import Loader from '../Loader/Loader';
import { HackerNewsFormWrapper } from './HackerNewsFrom.styled';

const HackerNewsForm: React.FC = () => {
  const { news, error } = useTypesSelector((state) => state.new);
  const dispatch = useDispatch();

  const sortedNews = news.sort((a, b) => (a.time < b.time ? 1 : -1));

  console.log(sortedNews);

  useEffect(() => {
    dispatch(fetchNews());
    setInterval(() => {
      //Автоматическое обновление списка новостей раз в минуту
      dispatch(fetchNews());
    }, 60000);
  }, [fetchNews]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <HackerNewsFormWrapper>
      <HackerNewsList sortedNews={sortedNews} />
    </HackerNewsFormWrapper>
  );
};

export default React.memo(HackerNewsForm);
