// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/Home" className="active home">Home</Link>
      <Link to="/Pharmacy"><i className="pharmacy"></i> Pharmacy</Link>
      <Link to="/Healthhistory"><i className="records"></i> Health History</Link>
      <Link to="/Lab"><i className="pathology"></i> Lab Tests</Link>
      <Link to="/Customercare"><i className="customer"></i> Customer Care</Link>
    </div>
  );
};

export default Navbar;
