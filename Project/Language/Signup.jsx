import React from 'react';
import './signup.css';

function login({Signup,setSignup}) {
  const handlelogin = () => {
    setSignup(!Signup)
  }
    return (
      <div className="login-container">
        <img src= "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"/>
        <h2>Create an account</h2>
        <form>
          Email address
          <input type="text" placeholder="" />
          Password
          <input type="text" placeholder="" />
          <button type="submit">NEXT</button>
          <p className="terms">
            By continuing, you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
          </p>
          <p className="signup">
            HAVE AN ACCOUNT? <a href="/login" onClick={(e)=>{
                e.preventDefault();
                handlelogin();
            }}>LOG IN</a>
          </p>
        </form>
      </div>
    )
}

export default login
