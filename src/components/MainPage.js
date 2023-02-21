import React from "react";
import list from "../img/list.png";
import create from "../img/create.png";
import bgImg from "../img/background-img.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <nav>Bejelentkezés adatok</nav>
      <div className="mainpage-section">
        <img className="bg-img" src={bgImg} alt="" />
        <div className="account-creating">
        <Link to={"/createAccount"}><img src={create} alt="" /></Link>
          <h3>Számla létrehozása</h3>
        </div>
        <div className="account-list">
          <Link to={"/accountsLists"}><img src={list} alt="" /></Link>
          <h3>Számlák listája</h3>
        </div>
      </div>
    </>
  );
};

export default MainPage;
