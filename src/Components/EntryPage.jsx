// Import React and any necessary styles
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styling/LoginSignup.css";  
function LoginSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); //prevents the default action

    try {
      const response = await axios.post('http://localhost:3001/auth/login', { email, password });
      try {
        if (response.status === 200) {
          console.log(response);
          nav('/Home')
        }
        else {
          alert("Alert check from /home");
        }
      } catch (error) {
        // alert(response.data.msg);
        alert("Alert check from status");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid email or password");
    }
    console.log("User logged in");
  }
  return (
    <div className='main'>
    <div className="wrapper">
      <div className="title-text">
        <div className="title login">Account Login</div>
      </div>
      <div className="form-container">
        
        <div className="form-inner">
          <form className="login" onSubmit={handleLogin}>
            <div className="field">
              <input type="text" placeholder="Email Address" value={email} required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" value={password} required onChange={(p) => setPassword(p.target.value)} />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginSignupPage;
