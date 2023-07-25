import React, { useState } from 'react';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import { HackerNewsItemIdWrapper } from './HackerNewsIdItem.styled';

interface HackerNewsIdItemProps {
  comments: any;
  handleClickReply: (id: number) => void;
}

const HackerNewsIdItem: React.FC<HackerNewsIdItemProps> = ({ comments, handleClickReply }) => {
  const [open, setOpen] = useState(false);
  comments.open = open;

  return (
    <HackerNewsItemIdWrapper
      onClick={() => {
        handleClickReply(comments.id);
        setOpen(true);
        console.log(comments.open);
      }}
    >
      <div>{comments.id + ' ' + `${comments.content}`}</div>
    </HackerNewsItemIdWrapper>
  );
};

export default HackerNewsIdItem;
