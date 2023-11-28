// Pharmacy.js
import React from 'react';
import { Link } from 'react-router-dom';
function Pharmacy(props) {
  const handleClick = () => {
    alert(`You've made a purchase of ${props.title}. Kindly come to the hospital and collect the medics.`);
  };

  return (
    <div>
    <div className="medicine-card" onClick={handleClick}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="Medicine" />
      <p>{props.info}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>
    </div>
    </div>
  );
}

export default Pharmacy;
