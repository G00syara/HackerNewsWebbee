import React, { useState } from 'react';
import { useCallback } from 'react';
import { NewsItem } from '../../../types/mainTypes';
import HackerNewsIdItem from '../HackerNewsIdItem/HackerNewsIdItem';
import { HackerNewsListIdWrapper } from './HackerNewsIdList.styled';

interface HackerNewsIdListProps {
  comments: NewsItem[] | undefined;
}

const HackerNewsIdList: React.FC<HackerNewsIdListProps> = ({ comments }) => {
  const [isReplying, setReplying] = useState<boolean>(false);
  const [isId, setIsId] = useState<number>(0);

  const handleClickOpen = useCallback(
    (id: number) => {
      setReplying(true);
      setIsId(id);
    },
    [isReplying, isId],
  );
  const handleClickClose = useCallback(
    (id: number) => {
      setReplying(false);
      setIsId(id);
    },
    [isReplying, isId],
  );

  return (
    <HackerNewsListIdWrapper>
      {comments?.map((item: NewsItem) => (
        <div>
          <HackerNewsIdItem
            key={item.id}
            comment={item}
            handleClickOpen={handleClickOpen}
            handleClickClose={handleClickClose}
          />
          {((isReplying && isId === item.id) || item.open) && !item?.dead ? (
            <HackerNewsIdList comments={item.comments} />
          ) : (
            ''
          )}
        </div>
      ))}
    </HackerNewsListIdWrapper>
  );
};

export default React.memo(HackerNewsIdList);
