import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsState } from '../../../types/news';
import { NewsItem } from '../../../types/mainTypes';
import { HackerNewsItemOther, HackerNewsItemTitle, HackerNewsItemWrapper } from './HackerNewsItem.styled';

interface HackerNewsItemProps {
  sortedNews: NewsState['news'];
}

const HackerNewsItem: React.FC<HackerNewsItemProps> = ({ sortedNews }) => {
  const router = useNavigate();

  return (
    <>
      {sortedNews.map((item: NewsItem) => (
        <HackerNewsItemWrapper key={item.id}>
          <HackerNewsItemTitle onClick={() => router(`/item/${item.id}`)}>{item.title}</HackerNewsItemTitle>
          <HackerNewsItemOther>
            {`${item?.points} points | by ${item?.user} | ${item.time_ago} | ${item.comments_count} comments`}
          </HackerNewsItemOther>
        </HackerNewsItemWrapper>
      ))}
    </>
  );
};

export default React.memo(HackerNewsItem);
