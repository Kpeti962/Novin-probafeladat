import React, { useEffect, useState } from "react";
import list from "../img/list.png";
import create from "../img/create.png";
import bgImg from "../img/background-img.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  const navigate = useNavigate();

  const [loginDatas, setLoginDatas] = useState({});
  useEffect(() => {
    setLoginDatas(JSON.parse(localStorage.getItem("user")));

    console.log(loginDatas);
  }, []);

  const logOutHandler = () => {
    navigate("/entry");
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 400 }}
      transition={{ duration: 0.4 }}
    >
     {loginDatas && (
       <div className="login-datas">
   
          <span>Bejelentkezés ideje: {loginDatas.entryTime}</span>
          <span>Üdvözlünk: {loginDatas.name}</span>
          <span>{loginDatas.username}</span>
       
          <button onClick={logOutHandler}>Kijelentkezés</button>
        </div>
      )} 
      <div className="mainpage-section">
        <img className="bg-img" src={bgImg} alt="" />
        <div className="account-creating">
          <Link to={"/createAccount"}>
            <img src={create} alt="" />
          </Link>
          <h3>Számla létrehozása</h3>
        </div>
        <div className="account-list">
          <Link to={"/accountsLists"}>
            <img src={list} alt="" />
          </Link>
          <h3>Számlák listája</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
