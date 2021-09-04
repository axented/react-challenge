import React, { createContext, useState } from 'react';

export const MessagesContext = createContext();

const MessagesContextProvider = ({ children }) => {
  const [priorityOne, setPriorityOne] = useState([]);
  const [priorityTwo, setPriorityTwo] = useState([]);
  const [priorityThree, setPriorityThree] = useState([]);
  return (
    <MessagesContext.Provider
      value={{
        priorityOne,
        setPriorityOne,
        priorityTwo,
        setPriorityTwo,
        priorityThree,
        setPriorityThree,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;
