// HealthHistory.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
function HealthHistory() {
  const [healthHistory, setHealthHistory] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    medicalHistory: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHealthHistory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call, data processing)
    try{
      const response = await axios.post('http://localhost:3001/health-history',{healthHistory });
      if(response.status === 201)
      {
        console.log(response);
        navigate('/Home')
      }
      else{
        alert("Error encounter while re-directing");
      }
    }

    catch (e) {
      console.log(e);
    }
    console.log('Form submitted:', healthHistory);
  };

  return (
    <div>
    <Navbar />
    <div className="health-history-form">
    
    <h2>Health History </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={healthHistory.firstName}
              onChange={handleChange}
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={healthHistory.lastName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={healthHistory.age}
              onChange={handleChange}
            />
          </label>

          <label>
            Gender:
            <select
              name="gender"
              value={healthHistory.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              
            </select>
          </label>
        </div>

        <label>
          Medical Issues:
          <textarea
            name="medicalHistory"
            value={healthHistory.medicalHistory}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default HealthHistory;
