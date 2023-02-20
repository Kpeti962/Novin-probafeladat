import React from "react";
import "./styles/App.scss";
import { Route, Routes, useLocation } from "react-router-dom";

import EntryPage from "./components/EntryPage";
import RegistrationPage from "./components/RegistrationPage";
import MainPage from "./components/MainPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/entry" element={<EntryPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/mainpage" element={<MainPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
