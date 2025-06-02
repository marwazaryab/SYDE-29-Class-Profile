import React from "react";
import "./Home.css";
import Star from "../../components/Stars";

const Home = () => {
  return (
    <div className="home-container">
      <Star />
      
      <div className="content">
        <h2 className="top-left">A LOOK</h2>
        <h2 className="middle-left">IN</h2>
        <h3 className="middle-right">SYDE</h3>
        <h2 className="bottom">CLASS OF '29!</h2>
        <button className="button">LET'S GO!</button>
      </div>
    </div>
  );
};

export default Home;
