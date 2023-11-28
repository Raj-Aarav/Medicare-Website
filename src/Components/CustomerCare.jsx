// CustomerCare.jsx
import React from 'react';

function CustomerCare(props) {
  return (
    <div className="customer-care-department">
      <h2>{props.department}</h2>
      <p>Contact Number: {props.contactNumber}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default CustomerCare;
