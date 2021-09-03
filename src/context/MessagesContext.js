import React, { createContext, useReducer } from 'react';
import { messagesReducer } from '../reducers/messagesReducer';

export const MessagesContext = createContext();

const MessagesContextProvider = ({ children }) => {
  const [messages, dispatch] = useReducer(messagesReducer, {});

  return (
    <MessagesContext.Provider value={{ messages, dispatch }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;
