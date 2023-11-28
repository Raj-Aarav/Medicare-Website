// Lab.jsx
import React from 'react';
function Lab(props) {

  const handleClick = () => {
    alert(`You've made an appointment of ${props.testName}. Kindly come to the hospital for the test.`);
  };
  return (
    <div className="lab-test" onClick={handleClick}>
      <h2>{props.testName}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Lab;
