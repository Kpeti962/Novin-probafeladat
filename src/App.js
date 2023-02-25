import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import EntryPage from "./components/EntryPage";
import RegistrationPage from "./components/RegistrationPage";
import MainPage from "./components/MainPage";
import AccountCreation from "./components/AccountCreation";
import AccountsList from "./components/accountList/AccountsList";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);
  const location = useLocation({});
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    entryTime: "",
  });

  const [account, setAccount] = useState({
    name: "",
    dateOfIssue: "",
    dueDate: "",
    itemName: "",
    price: "",
    comment: "",
    id: uuidv4(),
  });
  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("accounts")) ?? []
  );

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/entry"
            element={
              <EntryPage
                user={user}
                setUser={setUser}
                dangerAlert={dangerAlert}
                setDangerAlert={setDangerAlert}
              />
            }
          ></Route>
          <Route
            path="/registration"
            element={<RegistrationPage user={user} setUser={setUser} />}
          ></Route>
          <Route path="/mainpage" element={<MainPage user={user} />}></Route>
          <Route
            path="/createAccount"
            element={
              <AccountCreation
                account={account}
                setAccount={setAccount}
                accounts={accounts}
                setAccounts={setAccounts}
                successAlert={successAlert}
                setSuccessAlert={setSuccessAlert}
                dangerAlert={dangerAlert}
                setDangerAlert={setDangerAlert}
              />
            }
          ></Route>
          <Route
            path="/accountsLists"
            element={
              <AccountsList accounts={accounts} setAccounts={setAccounts} />
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
