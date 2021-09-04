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

  const handleNotificationClear = (setState, id) => {
    setState((el) => el.filter((notification) => notification.id !== id));
  };

  return (
    <div className="Home">
      <div className="Home-container">
        <MessageList />
        <div className="Home-cards">
          <div className="Home-cards-card">
            <p>{priorityOne.length}</p>
            <TestComponent
              data={priorityOne}
              background={'#F56236'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityOne, id)
              }
            />
          </div>
          <div className="Home-cards-card">
            <p>{priorityTwo.length}</p>
            <TestComponent
              data={priorityTwo}
              background={'#FCE788'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityTwo, id)
              }
            />
          </div>
          <div className="Home-cards-card">
            <p>{priorityThree.length}</p>
            <TestComponent
              data={priorityThree}
              background={'#88FCA3'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityThree, id)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
