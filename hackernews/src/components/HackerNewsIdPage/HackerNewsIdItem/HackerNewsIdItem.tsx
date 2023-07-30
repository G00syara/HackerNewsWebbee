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
  comment: NewsItem;
  handleClickOpen: (id: number) => void;
  handleClickClose: (id: number) => void;
}

const HackerNewsIdItem: React.FC<HackerNewsIdItemProps> = ({ comment, handleClickClose, handleClickOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const treatedContent = DOMPurify.sanitize(comment.content);

  comment.open = isOpen;

  if (comment.dead || comment.deleted) {
    return <></>;
  } else {
    return (
      <HackerNewsItemIdWrapper>
        <HackerNewsItemIdUserTime>{`${comment.user} | ${comment.time_ago}`}</HackerNewsItemIdUserTime>
        {/*Чтобы преобразовать string в Html */}
        <HackerNewsItemIdContent dangerouslySetInnerHTML={{ __html: treatedContent }}></HackerNewsItemIdContent>

        {/*Нужно использовать 2 одинаковых компонента, чтобы корректно работали функции показать и скрыть комментарии*/}
        <HackerNewsItemIdCountComments
          onClick={() => {
            setIsOpen(true);
            Promise.resolve().then(() => handleClickOpen(comment.id));
          }}
        >
          {comment.comments_count > 0 && !comment.open ? `👉 Количество комментариев ${comment.comments_count}` : ''}
        </HackerNewsItemIdCountComments>
        <HackerNewsItemIdCountComments
          onClick={() => {
            setIsOpen(false);
            Promise.resolve().then(() => handleClickClose(comment.id));
          }}
        >
          {comment.open && comment.comments_count > 0 ? `👇 Скрыть` : ''}
        </HackerNewsItemIdCountComments>
      </HackerNewsItemIdWrapper>
    );
  }
};

export default React.memo(HackerNewsIdItem, (prevProp, nextProp) => {
  if (prevProp.comment.open !== nextProp.comment.open) {
    return false;
  }
  return true;
});
