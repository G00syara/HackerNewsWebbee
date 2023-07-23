import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypesSelector } from '../hooks/useTypeSelector';
import { fetchCurrentNews } from '../store/action/news';
import Loader from '../UI/Loader/Loader';

const NewsIdPage: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { currentnews, comments, error, loading } = useTypesSelector((state) => state.currentNews);

  useEffect(() => {
    dispatch(fetchCurrentNews(params.id));
  }, []);

  if (error) {
    return <h1>Ошибка</h1>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>
        Новость с ID {currentnews.id} {currentnews.title}
      </h1>
      {currentnews?.url + ' ' + currentnews.time_ago + '\n' + currentnews.comments_count}
      <div style={{ border: '1px solid black' }}>
        {comments?.map((item) => {
          return item.content;
        })}
      </div>
    </div>
  );
};

export default NewsIdPage;
