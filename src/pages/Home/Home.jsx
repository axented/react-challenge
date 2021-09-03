import React, { useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import TestComponent from '../../components/TestComponent/TestComponent';
import MessagesContextProvider from '../../context/MessagesContext';

const Home = () => {
  return (
    <div>
      <MessagesContextProvider>
        <MessageList />
        <TestComponent />
      </MessagesContextProvider>
    </div>
  );
};

export default Home;
