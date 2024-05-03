import React from "react";
import "./loginForm.css";
// import Background from "./images/pexels-felixmittermeier-956999.jpg"style={{ backgroundImage: `url(${Background})` }};
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="bg">
      <div className="electronic-name">
        <h1>Electronic Store</h1>
        <p>
          It gets more powerful all the time and it gets cheaper all the time
        </p>
      </div>

      <form className="login-form">
        <h1 className="heading">Let's Connect With Us!</h1>
        <div>
          <input placeholder="Email or Phone Number" className="email"></input>
        </div>
        <div>
          <input placeholder="Password" className="password"></input>
        </div>
        <button className="login-btn">Login</button>

        <fieldset>
          <legend>or</legend>
        </fieldset>

        <div className="fab-icon">
          <div className="icon">
            <FcGoogle />
          </div>
          <div className="icon-name">
            <p>Connect with Google</p>
          </div>
        </div>
        <div className="fab-icon">
          <div className="icon">
            <FaApple />
          </div>
          <div className="icon-name">
            <p>Connect with Apple</p>
          </div>
        </div>

        <div className="create-link">
          <p>Are you new ? </p>
          <div className="">
            <a href="#">Create Acccount</a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
