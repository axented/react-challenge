import React from 'react';

const TestComponent = ({ data, background, handleNotificationClear }) => {
  let filteredArray = data;

  return (
    <div>
      {filteredArray?.map((el) => (
        <div key={el.id} style={{ background: background }}>
          <p>{el.message}</p>
          <p onClick={() => handleNotificationClear(el.id)}>Clear</p>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
