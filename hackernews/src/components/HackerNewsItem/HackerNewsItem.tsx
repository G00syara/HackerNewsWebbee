import React from 'react';
import { NewsState } from '../../types/news';
import { HackerNewsItemWrapper } from './HackerNewsItem.styled';

interface HackerNewsItemProps {
  sortedNews: NewsState['news'];
}

const HackerNewsItem: React.FC<HackerNewsItemProps> = ({ sortedNews }) => {
  return (
    <>
      {sortedNews.map((item: any) => (
        <HackerNewsItemWrapper key={item.id}>
          {item.title + ' ' + item?.points + ' ' + item?.user + ' ' + item.time_ago}
        </HackerNewsItemWrapper>
      ))}
    </>
  );
};

export default React.memo(HackerNewsItem);
