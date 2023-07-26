import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { fetchCurrentNews } from '../../../store/action/news';
import { ButtonRefreshDataAPI, ButtonScrollUp } from '../../../UI/Button/Buttons';
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

  useEffect(() => {
    dispatch(fetchCurrentNews(params.id));
    setInterval(() => {
      //Автоматическое обновление списка новостей раз в минуту
      dispatch(fetchCurrentNews(currentnews.id));
    }, 60000);
  }, []);

  const rating: string =
    currentnews.points > 100
      ? '⭐⭐⭐⭐⭐'
      : currentnews.points > 50
      ? '⭐⭐⭐⭐'
      : currentnews.points > 25
      ? '⭐⭐⭐'
      : currentnews.points > 10
      ? '⭐⭐'
      : '⭐';

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
        <HackerNewsIdFormUrl href={currentnews.url} target="_blank">
          Link to the news
        </HackerNewsIdFormUrl>
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
          dispatch(fetchCurrentNews(currentnews.id));
        }}
      >
        ↻
      </ButtonRefreshDataAPI>
    </HackerNewsIdFormWrapper>
  );
};

export default React.memo(HackerNewsIdForm);
