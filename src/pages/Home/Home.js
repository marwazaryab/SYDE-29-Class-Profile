import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background">

        <div className="glow-green"></div>
        <div className="glow-pink"></div>
        <div className="glow-blue"></div>

      </div>

      <div className="content">
        <h1>
          A LOOK IN SYDE CLASS OF '29!
        </h1>
        <button className="button">LET'S GO!</button>
      </div>

    </div>
  );
};

export default Home;

