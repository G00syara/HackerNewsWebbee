import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { fetchCurrentNews } from '../../../store/action/news';
import { ButtonRefreshDataAPI, ButtonScrollUp } from '../../../UI/Button/Buttons';
import Loader from '../../../UI/Loader/Loader';
import RerenderComponent from '../../RerenderedComponent/RerenderedComponent';
import HackerNewsIdList from '../HackerNewsIdList/HackerNewsIdList';
import {
  HackerNewsIdFormContainer,
  HackerNewsIdFormError,
  HackerNewsIdFormOther,
  HackerNewsIdFormTitle,
  HackerNewsIdFormUrl,
  HackerNewsIdFormWrapper,
} from './HackerNewsIdForm.styled';

const HackerNewsIdForm: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [isRefreshed, setRefreshed] = useState<boolean>(false);

  const { currentnews, comments, error, loading } = useTypesSelector((state) => state.currentNews);

  useEffect(() => {
    dispatch(fetchCurrentNews(params.id));
  }, []);

  const uploadComments = useCallback(async () => {
    dispatch(fetchCurrentNews(params.id));
  }, [params.id]);

  const rating: string =
    currentnews.points !== null
      ? currentnews.points > 100
        ? '⭐⭐⭐⭐⭐'
        : currentnews.points > 50
        ? '⭐⭐⭐'
        : currentnews.points > 10
        ? '⭐⭐'
        : '⭐'
      : '';

  if (error) {
    return <HackerNewsIdFormError>{error}</HackerNewsIdFormError>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <HackerNewsIdFormWrapper>
      <HackerNewsIdFormContainer>
        <HackerNewsIdFormTitle>{currentnews.title}</HackerNewsIdFormTitle>
        <HackerNewsIdFormUrl href={currentnews.url} target="_blank">
          Link to the news
        </HackerNewsIdFormUrl>
        <RerenderComponent callback={uploadComments} />
        <HackerNewsIdFormOther>{`${rating} | ${currentnews.time_ago} | by ${currentnews.user} | ${currentnews.comments_count} comments`}</HackerNewsIdFormOther>
      </HackerNewsIdFormContainer>
      <div>
        <HackerNewsIdList comments={comments} />
      </div>
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
      <ButtonRefreshDataAPI
        onClick={() => {
          dispatch(fetchCurrentNews(params.id));
        }}
      >
        ↻
      </ButtonRefreshDataAPI>
    </HackerNewsIdFormWrapper>
  );
};

export default HackerNewsIdForm;
