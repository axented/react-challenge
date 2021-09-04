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

  console.log({ priorityOne, priorityTwo, priorityThree });

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
            <h3>Error Type 1</h3>
            <p>Count {priorityOne.length}</p>
            <Card
              data={priorityOne}
              background={'#F56236'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityOne, id)
              }
            />
          </div>
          <div className="Home-cards-card">
            <h3>Warning Type 2</h3>

            <p>Count {priorityTwo.length}</p>
            <Card
              data={priorityTwo}
              background={'#FCE788'}
              handleNotificationClear={(id) =>
                handleNotificationClear(setPriorityTwo, id)
              }
            />
          </div>
          <div className="Home-cards-card">
            <h3>Info Type 3</h3>

            <p>Count {priorityThree.length}</p>
            <Card
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
