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
  return (
    <>
      <HackerNewsItem sortedNews={sortedNews} />
    </>
  );
};

export default React.memo(HackerNewsList);
