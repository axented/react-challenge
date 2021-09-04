import React from 'react';

import './Card.css';

const TestComponent = ({ data, title, background, handleNotificationClear }) => {
  let filteredArray = data;

  return (
    <div className="Cards">
      <h3>{title}</h3>
      <p>count {data.length}</p>
      {filteredArray?.map((el) => (
        <div key={el.id} style={{ background: background }} className="Cards-card">
          <p>
            <b>{el.message}</b>
          </p>
          <p onClick={() => handleNotificationClear(el.id)}>Clear</p>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
