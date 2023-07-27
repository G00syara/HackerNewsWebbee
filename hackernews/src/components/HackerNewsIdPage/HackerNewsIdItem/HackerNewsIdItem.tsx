import React, { useState } from 'react';
import { NewsItem } from '../../../types/mainTypes';
import DOMPurify from 'dompurify';
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
  const [isOpen, setIsOpen] = useState(false);

  comments.open = isOpen;

  const treatedContent = DOMPurify.sanitize(comments.content);

  return (
    <HackerNewsItemIdWrapper>
      <HackerNewsItemIdUserTime>{`${comments.user} | ${comments.time_ago}`}</HackerNewsItemIdUserTime>
      {/*Чтобы преобразовать string в Html */}
      <HackerNewsItemIdContent dangerouslySetInnerHTML={{ __html: treatedContent }}></HackerNewsItemIdContent>

      <HackerNewsItemIdCountComments
        onClick={() => {
          {
            /*Симуляция подгрузки, т.к. API, которую я использую загружает комменты все сразу*/
          }
          setIsOpen(true);
          setTimeout(() => {
            handleClickReplyAndSetId(comments.id);
          }, 300);
        }}
      >
        {comments.comments_count > 0 ? `👉 Количество комментариев ${comments.comments_count}` : ''}
      </HackerNewsItemIdCountComments>
    </HackerNewsItemIdWrapper>
  );
};

export default React.memo(HackerNewsIdItem);
