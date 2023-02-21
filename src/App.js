import React, { useState } from "react";
import "./styles/App.scss";
import { Route, Routes, useLocation } from "react-router-dom";

import EntryPage from "./components/EntryPage";
import RegistrationPage from "./components/RegistrationPage";
import MainPage from "./components/MainPage";
import AccountCreation from "./components/AccountCreation";
import AccountsList from "./components/AccountsList";

function App() {
  const location = useLocation({});
  const [user, setUser] = useState(
    {
      username: "",
      password: "",
      confirmPassword: ""
    },
  );

  const [account, setAccount] = useState({
    name: "",
    dateOfIssue: "",
    dueDate: "",
    itemName: "",
    price: "",
    comment: "",
  });
  const [accounts, setAccounts] = useState([account]);
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/entry" element={<EntryPage />}></Route>
        <Route path="/registration" element={<RegistrationPage user={user} setUser={setUser} />}></Route>
        <Route path="/mainpage" element={<MainPage />}></Route>
        <Route
          path="/createAccount"
          element={
            <AccountCreation
              account={account}
              setAccount={setAccount}
              accounts={accounts}
              setAccounts={setAccounts}
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
    </div>
  );
}

export default App;
