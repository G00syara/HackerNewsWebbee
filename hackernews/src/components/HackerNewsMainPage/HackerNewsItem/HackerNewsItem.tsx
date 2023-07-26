import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsState } from '../../../types/news';
import { HackerNewsItemOther, HackerNewsItemTitle, HackerNewsItemWrapper } from './HackerNewsItem.styled';

interface HackerNewsItemProps {
  sortedNews: NewsState['news'];
}

const HackerNewsItem: React.FC<HackerNewsItemProps> = ({ sortedNews }) => {
  const router = useNavigate();
  console.log(router);

  return (
    <>
      {sortedNews.map((item: any) => (
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
