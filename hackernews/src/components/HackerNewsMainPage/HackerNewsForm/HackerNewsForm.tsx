import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { fetchNews } from '../../../store/action/news';
import { ButtonRefreshDataAPI, ButtonScrollUp } from '../../../UI/Button/Buttons';
import Loader from '../../../UI/Loader/Loader';
import RerenderedComponent from '../../RerenderedComponent/RerenderedComponent';
import HackerNewsList from '../HackerNewsList/HackerNewsList';
import { HackerNewsFormWrapper } from './HackerNewsFrom.styled';

const HackerNewsForm: React.FC = () => {
  const { news, error, loading } = useTypesSelector((state) => state.newsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const uploadNews = useCallback(async () => {
    dispatch(fetchNews());
  }, [news, dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <HackerNewsFormWrapper>
      <HackerNewsList sortedNews={news} />
      <ButtonScrollUp
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
      >
        ⇧
      </ButtonScrollUp>
      <RerenderedComponent callback={uploadNews} />
      <ButtonRefreshDataAPI
        onClick={() => {
          uploadNews();
        }}
      >
        ↻
      </ButtonRefreshDataAPI>
    </HackerNewsFormWrapper>
  );
};

export default HackerNewsForm;
