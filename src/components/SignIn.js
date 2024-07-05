import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Auth.css';

const SignIn = () => {
  return (
    <div className="page-container">
      <div className="auth-container">
        <h1 className="auth-title">Sign In</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="auth-link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
