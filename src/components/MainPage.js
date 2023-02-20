import React from "react";
import list from "../img/list.png";
import create from "../img/create.png";
import bgImg from "../img/background-img.png";

const MainPage = () => {
  return (
    <>
      <nav>Bejelentkezés adatok</nav>
      <div className="mainpage-section">
        <img className="bg-img" src={bgImg} alt="" />
        <div className="account-creating">
          <img src={create} alt="" />
          <h3>Számla létrehozása</h3>
        </div>
        <div className="account-list">
          <img src={list} alt="" />
          <h3>Számla létrehozása</h3>
        </div>
      </div>
    </>
  );
};

export default MainPage;
