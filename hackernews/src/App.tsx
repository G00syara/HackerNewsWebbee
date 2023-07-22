import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import type {} from 'redux-thunk/extend-redux';
import { useTypesSelector } from './hooks/useTypeSelector';
import { fetchNews } from './store/action/news';

const App: React.FC = () => {
  const { news, error, loading } = useTypesSelector((state) => state.new);
  const dispatch = useDispatch();

  const sortedNews = news.sort((a, b) => (a.time < b.time ? 1 : -1));

  console.log(sortedNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>ХэкНьюс</h1>
      <div>
        <button onClick={() => dispatch(fetchNews())}>Получить клиентов из базы</button>
      </div>
      <div>
        {sortedNews.map((item: any) => (
          <div key={item.id}>{item.title + ' ' + item?.points + ' ' + item?.user + ' ' + item.time}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
