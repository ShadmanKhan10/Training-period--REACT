import React from "react";
import background from "../assets/background.png";
import ball from "../assets/ball.png";
import logo from "../assets/logo.png";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div>
      <div>
        <img className="bg-image" src={background} alt="background" />
      </div>
      <div className="logo-container">
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <div className="input-container1">
        <div className="text-containing-div">
          <h3 className="text">
            Thanks for the event registration. Your Event access QR code has
            been sent to your registered email id.
          </h3>
        </div>
      </div>
      <div>
        <img className="ball-image" src={ball} alt="ball" />
      </div>
    </div>
  );
}
