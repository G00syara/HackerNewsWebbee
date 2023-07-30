import React from 'react';
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
