import React, { useState } from 'react';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import {
  HackerNewsItemIdContent,
  HackerNewsItemIdCountComments,
  HackerNewsItemIdUserTime,
  HackerNewsItemIdWrapper,
} from './HackerNewsIdItem.styled';

interface HackerNewsIdItemProps {
  comments: any;
  handleClickReply: (id: number) => void;
}

const HackerNewsIdItem: React.FC<HackerNewsIdItemProps> = ({ comments, handleClickReply }) => {
  const [open, setOpen] = useState(false);
  comments.open = open;

  return (
    <HackerNewsItemIdWrapper>
      <HackerNewsItemIdUserTime>{`${comments.user} | ${comments.time_ago}`}</HackerNewsItemIdUserTime>

      {/*Чтобы преобразовать string в Html */}
      <HackerNewsItemIdContent dangerouslySetInnerHTML={{ __html: comments.content }}></HackerNewsItemIdContent>

      <HackerNewsItemIdCountComments
        onClick={() => {
          handleClickReply(comments.id);
          setOpen(true);
        }}
      >
        {comments.comments_count > 0 ? `👉 Количество комментариев ${comments.comments_count}` : ''}
      </HackerNewsItemIdCountComments>
    </HackerNewsItemIdWrapper>
  );
};

export default HackerNewsIdItem;
