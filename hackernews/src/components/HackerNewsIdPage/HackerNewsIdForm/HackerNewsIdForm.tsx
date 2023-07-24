import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { fetchCurrentNews } from '../../../store/action/news';
import Loader from '../../../UI/Loader/Loader';
import HackerNewsIdList from '../HackerNewsIdList/HackerNewsIdList';

const HackerNewsIdForm: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { currentnews, comments, error, loading } = useTypesSelector((state) => state.currentNews);

  const [commentsTree, setCommentTree] = useState(comments);

  useEffect(() => {
    dispatch(fetchCurrentNews(params.id));
  }, []);

  const handleLoadingComments = (id: number): any => {
    setCommentTree((comments: any): any => {
      const childrenComments = (children: any[]): any => {
        return children.map((item) => {
          if (item.comments && item.id === id) {
            console.log(item.comments);
            return { ...item, comments: childrenComments(item.comments) };
          }
          return item;
        });
      };
      return childrenComments(comments);
    });
  };
  if (error) {
    return <h1>Ошибка</h1>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{currentnews.title}</h1>
      {currentnews?.url + ' ' + currentnews.time_ago + '\n' + currentnews.comments_count}
      <div>
        <HackerNewsIdList comments={comments} handleLoadingComments={handleLoadingComments} />
      </div>
    </div>
  );
};

export default HackerNewsIdForm;
