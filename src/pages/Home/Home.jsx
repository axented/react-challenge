import React, { useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import TestComponent from '../../components/TestComponent/TestComponent';
import { MessagesContext } from '../../context/MessagesContext';

import './Home.css';

const Home = () => {
  const {
    priorityOne,
    priorityTwo,
    priorityThree,
    setPriorityOne,
    setPriorityTwo,
    setPriorityThree,
  } = useContext(MessagesContext);

  console.log({ priorityOne, priorityTwo, priorityThree });

  const handleClick = () => {
    setPriorityOne([]);
    setPriorityTwo([]);
    setPriorityThree([]);
  };

  return (
    <div>
      <MessageList />
      <button onClick={handleClick}>Clear</button>
      <div className="cards">
        <TestComponent data={priorityOne} background={'#F56236'} />
        <TestComponent data={priorityTwo} background={'#FCE788'} />
        <TestComponent data={priorityThree} background={'#88FCA3'} />
      </div>
    </div>
  );
};

export default Home;
