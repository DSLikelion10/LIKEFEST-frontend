import React from 'react';
import BoardItem from './BoardItem';

const BoardList = ({ texts }) => {
  return (
    <div>
      {texts
        .slice()
        .reverse()
        .map((text) => (
          <BoardItem text={text} key={text.id} />
        ))}
    </div>
  );
};

export default BoardList;
