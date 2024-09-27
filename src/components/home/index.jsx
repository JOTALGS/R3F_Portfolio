import React from "react";
import "./style.css";

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <h1 className="header">SOFTWARE ENGINEERING</h1>
        <div className="left">DEVELOPER &</div>
        <div className="left l1">DESIGNER</div>
        <div className="left l2">CREATIVE</div>
        <div className="main">
          <div className="profile-img-container">
            <img src="/images/profile.jpg" alt="Profile" className="profile-img"/>
          </div>
        </div>
        <div className="footer">JOSE PEDRO G.S.</div>
      </div>
    
    </section>
  );
};
