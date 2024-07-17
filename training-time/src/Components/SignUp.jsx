import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import ball from "../assets/ball.png";
import logo from "../assets/logo.png";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("running");
    e.preventDefault();

    navigate("/home");
  };

  return (
    <div>
      <div>
        <img className="bg-image" src={background} alt="background" />
      </div>
      <div className="logo-container">
        <img className="logo-image" src={logo} alt="logo" />
      </div>

      <div className="input-container">
        <form>
          <label className="label">NAME</label>
          <br />
          <input className="input" type="text" placeholder="Enter" />
          <br />
          <label className="label">COMPANY/PROPREITOR NAME</label>
          <br />
          <input className="input" type="text" placeholder="Enter" />
          <br />
          <div className="contact-email-div">
            <div className="contact-div">
              <label className="label">CONTACT </label>
              <br />
              <input className="input" type="number" placeholder="Enter" />
              <br />
            </div>
            <div className="email-div">
              <label className="label">EMAIL ID</label>
              <br />
              <input className="input" type="email" placeholder="Enter" />
              <br />
            </div>
          </div>
          <div className="btn">
            <button onClick={handleSubmit} className="btn-submit" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <div>
        <img className="ball-image" src={ball} alt="ball" />
      </div>
      {/* <button onClick={handleSubmit}>add</button> */}
    </div>
  );
}
