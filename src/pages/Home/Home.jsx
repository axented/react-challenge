import React, { useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import TestComponent from '../../components/TestComponent/TestComponent';
import { MessagesContext } from '../../context/MessagesContext';

import './Home.css';

const Home = () => {
  const { priorityOne, priorityTwo, priorityThree } = useContext(MessagesContext);

  console.log({ priorityOne, priorityTwo, priorityThree });

  return (
    <div>
      <MessageList />
      <div className="cards">
        <p>{priorityOne.length}</p>
        <TestComponent data={priorityOne} background={'#F56236'} />

        <p>{priorityTwo.length}</p>
        <TestComponent data={priorityTwo} background={'#FCE788'} />

        <p>{priorityThree.length}</p>
        <TestComponent data={priorityThree} background={'#88FCA3'} />
      </div>
    </div>
  );
};

export default Home;
