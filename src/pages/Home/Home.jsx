import React from 'react';
import MessageList from '../../components/MessageList/MessageList';
import MessagesContextProvider from '../../context/MessagesContext';

const Home = () => {
  return (
    <div>
      <MessagesContextProvider>
        <MessageList />
      </MessagesContextProvider>
    </div>
  );
};

export default Home;
