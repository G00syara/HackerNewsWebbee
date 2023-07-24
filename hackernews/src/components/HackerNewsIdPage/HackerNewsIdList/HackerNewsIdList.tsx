import React, { useState } from 'react';
import { useTypesSelector } from '../../../hooks/useTypeSelector';
import Loader from '../../../UI/Loader/Loader';
import HackerNewsIdItem from '../HackerNewsId/HackerNewsIdItem';

interface HackerNewsIdListProps {
  comments: any;
  handleLoadingComments: (id: number) => void;
}

const HackerNewsIdList: React.FC<HackerNewsIdListProps> = ({ comments, handleLoadingComments }) => {
  return (
    <>
      {comments?.map((item: any) => (
        <div style={{ border: '1px solid green', margin: 20 }}>
          <HackerNewsIdItem key={item.id} comments={item} handleLoadingComments={handleLoadingComments} />
          <div>
            <HackerNewsIdList comments={item.comments} handleLoadingComments={handleLoadingComments} />
          </div>
        </div>
      ))}
    </>
  );
};

export default HackerNewsIdList;
