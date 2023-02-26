import React, { useEffect, useState } from "react";
import list from "../img/list.png";
import create from "../img/create.png";
import bgImg from "../img/background-img.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiUserCircle } from "react-icons/bi";

const MainPage = () => {
  const navigate = useNavigate();

  const [loginDatas, setLoginDatas] = useState({});
  useEffect(() => {
    setLoginDatas(JSON.parse(localStorage.getItem("user")));
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
        <div className="login-datas d-flex justify-content-between">
          <span className="d-flex justify-content-center align-items-center">Bejelentkezés ideje: {loginDatas.entryTime}</span>
          <span className="d-flex justify-content-center align-items-center">Üdvözlünk: {loginDatas.name}</span>
          <div className="d-flex justify-content-center align-items-center">
            <span>{loginDatas.username}</span>
            <BiUserCircle className="text-white" size={20} />
          </div>
          <button onClick={logOutHandler}>Kijelentkezés</button>
        </div>
      )}
      <div className="mainpage-section d-flex justify-content-evenly align-items-center position-relative">
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
