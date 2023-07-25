import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { fetchCurrentNews } from '../../../store/action/news';
import { NewsItem } from '../../../types/types';
import Loader from '../../../UI/Loader/Loader';
import HackerNewsIdList from '../HackerNewsIdList/HackerNewsIdList';
import {
  HackerNewsIdFormContainer,
  HackerNewsIdFormOther,
  HackerNewsIdFormTitle,
  HackerNewsIdFormUrl,
  HackerNewsIdFormWrapper,
} from './HackerNewsIdForm.styled';

const HackerNewsIdForm: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { currentnews, comments, error, loading } = useTypesSelector((state) => state.currentNews);

  const [commentsTree, setCommentTree] = useState(comments);

  const rating =
    currentnews.points > 100
      ? '⭐⭐⭐⭐⭐'
      : currentnews.points > 50
      ? '⭐⭐⭐⭐'
      : currentnews.points > 25
      ? '⭐⭐⭐'
      : currentnews.points > 10
      ? '⭐⭐'
      : '⭐';

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
    <HackerNewsIdFormWrapper>
      <HackerNewsIdFormContainer>
        <HackerNewsIdFormTitle>{currentnews.title}</HackerNewsIdFormTitle>
        <HackerNewsIdFormUrl> {` (${currentnews?.url})`}</HackerNewsIdFormUrl>
        <HackerNewsIdFormOther>{` ${rating} | ${currentnews.time_ago} | by ${currentnews.user} | ${currentnews.comments_count} comments`}</HackerNewsIdFormOther>
      </HackerNewsIdFormContainer>
      <div>
        <HackerNewsIdList comments={comments} />
      </div>
    </HackerNewsIdFormWrapper>
  );
};

export default HackerNewsIdForm;
