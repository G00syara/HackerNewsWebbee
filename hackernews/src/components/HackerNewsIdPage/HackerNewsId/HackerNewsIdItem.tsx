import React from 'react';

interface HackerNewsIdItemProps {
  comments: any;
  handleLoadingComments: (id: number) => void;
}

const HackerNewsIdItem: React.FC<HackerNewsIdItemProps> = ({ comments, handleLoadingComments }) => {
  return (
    <div>
      <button onClick={() => handleLoadingComments(comments.id)}> подгрузить комменты </button>
      <div>{comments.id + ' ' + `${comments.content}`}</div>
    </div>
  );
};

export default HackerNewsIdItem;
