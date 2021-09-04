import React, { useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import Notification from '../../components/Notification/Notification';
import Card from '../../components/Card/Card';
import { MessagesContext } from '../../context/MessagesContext';

import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const {
    priorityOne,
    priorityTwo,
    priorityThree,
    setPriorityOne,
    setPriorityTwo,
    setPriorityThree,
  } = useContext(MessagesContext);

  const handleNotificationClear = (setState, id) => {
    setState((el) => el.filter((notification) => notification.id !== id));
  };

  return (
    <div className="Home">
      <div className="Home-container">
        <Navbar />
        <Notification data={priorityOne} />
        <MessageList />
        <div className="Home-cards">
          <div className="Home-cards-card">
            <Card
              data={priorityOne}
              title={'Error Type 1'}
              background={'#F56236'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityOne, id)
              }
            />
          </div>
          <div className="Home-cards-card">
            <Card
              data={priorityTwo}
              title={'Warning Type 2'}
              background={'#FCE788'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityTwo, id)
              }
            />
          </div>
          <div className="Home-cards-card">
            <Card
              data={priorityThree}
              title={'Info Type 3'}
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
