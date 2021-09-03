import React from 'react';
import { useContext } from 'react';
import { MessagesContext } from '../../context/MessagesContext';

const TestComponent = () => {
  const { messages } = useContext(MessagesContext);

  console.log('test', messages);

  return (
    <div>
      <p>TEST</p>
    </div>
  );
};

export default TestComponent;
