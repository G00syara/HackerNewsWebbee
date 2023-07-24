import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import type {} from 'redux-thunk/extend-redux';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { fetchNews } from '../../../store/action/news';
import Loader from '../../../UI/Loader/Loader';
import HackerNewsList from '../HackerNewsList/HackerNewsList';
import { HackerNewsFormWrapper } from './HackerNewsFrom.styled';

const HackerNewsForm: React.FC = () => {
  const { news, error, loading } = useTypesSelector((state) => state.newsList);
  const dispatch = useDispatch();

  const sortedNews = news.sort((a, b) => (a.time < b.time ? 1 : -1));

  useEffect(() => {
    dispatch(fetchNews());
    setInterval(() => {
      //Автоматическое обновление списка новостей раз в минуту
      dispatch(fetchNews());
    }, 1000000);
  }, [fetchNews]);

  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <HackerNewsFormWrapper>
      <HackerNewsList sortedNews={sortedNews} />
    </HackerNewsFormWrapper>
  );
};

export default React.memo(HackerNewsForm);
