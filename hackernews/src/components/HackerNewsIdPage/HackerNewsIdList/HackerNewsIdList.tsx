import React, { useState } from 'react';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import Loader from '../../../UI/Loader/Loader';
import HackerNewsIdItem from '../HackerNewsIdItem/HackerNewsIdItem';
import { HackerNewsListIdWrapper } from './HackerNewsIdList.styled';

interface HackerNewsIdListProps {
  comments: any;
}

const HackerNewsIdList: React.FC<HackerNewsIdListProps> = ({ comments }) => {
  const [isReplying, setReplying] = useState<boolean>(false);
  const [isId, setIsId] = useState<number>(0);

  const handleClickReply = (id: number) => {
    setReplying(true);
    setIsId(id);
    console.log(isReplying + ' ' + isId);
  };

  return (
    <>
      {comments?.map((item: any) => (
        <HackerNewsListIdWrapper>
          <div>
            <HackerNewsIdItem key={item.id} comments={item} handleClickReply={handleClickReply} />
          </div>
          <div>{((isReplying && isId === item.id) || item.open) && <HackerNewsIdList comments={item.comments} />}</div>
        </HackerNewsListIdWrapper>
      ))}
    </>
  );
};

export default HackerNewsIdList;
