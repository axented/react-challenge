import React from 'react';

const TestComponent = ({ data, background }) => {
  return (
    <div>
      {data.map((el) => (
        <div key={el.id} style={{ background: background }}>
          <p>{el.message}</p>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
