import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import Loader from '../../../UI/Loader/Loader';
import { fetchNews } from '../../../store/action/news';
import { NewsState } from '../../../types/news';
import HackerNewsItem from '../HackerNewsItem/HackerNewsItem';

interface HackerNewsListProps {
  sortedNews: NewsState['news'];
}

const HackerNewsList: React.FC<HackerNewsListProps> = ({ sortedNews }) => {
  const { loading } = useTypesSelector((state) => state.newsList);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {/*Кнопка для обновления списка новостей */}
        <button onClick={() => dispatch(fetchNews())}>Получить клиентов из базы</button>{' '}
      </div>
      <div>
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Loader />
          </div>
        )}
      </div>
      <HackerNewsItem sortedNews={sortedNews} />
    </>
  );
};

export default React.memo(HackerNewsList);
