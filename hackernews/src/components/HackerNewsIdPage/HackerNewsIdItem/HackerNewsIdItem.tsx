import React, { useState } from 'react';
import { NewsItem } from '../../../types/types';
import {
  HackerNewsItemIdContent,
  HackerNewsItemIdCountComments,
  HackerNewsItemIdUserTime,
  HackerNewsItemIdWrapper,
} from './HackerNewsIdItem.styled';

interface HackerNewsIdItemProps {
  comments: NewsItem;
  handleClickReplyAndSetId: (id: number) => void;
}

const HackerNewsIdItem: React.FC<HackerNewsIdItemProps> = ({ comments, handleClickReplyAndSetId }) => {
  const [open, setOpen] = useState(false);

  comments.open = open;

  return (
    <HackerNewsItemIdWrapper>
      <HackerNewsItemIdUserTime>{`${comments.user} | ${comments.time_ago}`}</HackerNewsItemIdUserTime>
      {/*Чтобы преобразовать string в Html */}
      <HackerNewsItemIdContent dangerouslySetInnerHTML={{ __html: comments.content }}></HackerNewsItemIdContent>

      <HackerNewsItemIdCountComments
        onClick={() => {
          {
            /*Симуляция подгрузки, т.к. API, которую я использую загружает комменты все сразу*/
          }
          setTimeout(() => {
            handleClickReplyAndSetId(comments.id);
            setOpen((x) => !x);
          }, 300);
        }}
      >
        {comments.comments_count > 0 ? `👉 Количество комментариев ${comments.comments_count}` : ''}
      </HackerNewsItemIdCountComments>
    </HackerNewsItemIdWrapper>
  );
};

export default React.memo(HackerNewsIdItem);
