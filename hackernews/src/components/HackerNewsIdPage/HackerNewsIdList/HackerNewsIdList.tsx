import React, { useState } from 'react';
import { useCallback } from 'react';
import { NewsItem } from '../../../types/types';
import HackerNewsIdItem from '../HackerNewsIdItem/HackerNewsIdItem';
import { HackerNewsListIdWrapper } from './HackerNewsIdList.styled';

interface HackerNewsIdListProps {
  comments: NewsItem[] | undefined;
}

const HackerNewsIdList: React.FC<HackerNewsIdListProps> = ({ comments }) => {
  const [isReplying, setReplying] = useState<boolean>(false);
  const [isId, setIsId] = useState<number>(0);

  const handleClickReplyAndSetId = useCallback((id: number) => {
    setReplying((x) => (x = true));
    setIsId(id);
  }, []);

  return (
    <>
      {comments?.map((item: any) => (
        <HackerNewsListIdWrapper>
          <HackerNewsIdItem key={item.id} comments={item} handleClickReplyAndSetId={handleClickReplyAndSetId} />
          {((isReplying && isId === item.id) || item.open) && <HackerNewsIdList comments={item.comments} />}
        </HackerNewsListIdWrapper>
      ))}
    </>
  );
};

export default React.memo(HackerNewsIdList);
