import React from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { NewsState } from '../../types/news';
import { HackerNewsItemWrapper } from './HackerNewsItem.styled';

interface HackerNewsItemProps {
  sortedNews: NewsState['news'];
}

const HackerNewsItem: React.FC<HackerNewsItemProps> = ({ sortedNews }) => {
  const router = useNavigate();
  console.log(router);

  return (
    <>
      {sortedNews.map((item: any) => (
        <HackerNewsItemWrapper key={item.id} onClick={() => router(`/item/${item.id}`)}>
          {item.id + ' ' + item.title + ' ' + item?.points + ' ' + item?.user + ' ' + item.time_ago}
        </HackerNewsItemWrapper>
      ))}
    </>
  );
};

export default React.memo(HackerNewsItem);
