import React from 'react';
import { useContext } from 'react';
import { MessagesContext } from '../../context/MessagesContext';

const TestComponent = () => {
  const { priorityOne, priorityTwo, priorityThree } = useContext(MessagesContext);

  console.log({ priorityOne, priorityTwo, priorityThree });

  // if (messages[0]?.priority === 1) {
  //   console.log(messages[0], 1);
  // }

  return (
    <div>
      <p>TEST</p>
    </div>
  );
};

export default TestComponent;
