import React, { useState } from "react";
import "./styles/App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import EntryPage from "./components/EntryPage";
import RegistrationPage from "./components/RegistrationPage";
import MainPage from "./components/MainPage";
import AccountCreation from "./components/AccountCreation";
import AccountsList from "./components/accountList/AccountsList";
import { AnimatePresence } from "framer-motion";
import ActualAccount from "./components/accountList/ActualAccount";
import NotFound from "./components/NotFound";

function App() {
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);
  const location = useLocation({});
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      entryTime: "",
      isLoggedIn: false,
    }
  );

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
            element={
              <RegistrationPage
                dangerAlert={dangerAlert}
                setDangerAlert={setDangerAlert}
                successAlert={successAlert}
                setSuccessAlert={setSuccessAlert}
                user={user}
                setUser={setUser}
              />
            }
          ></Route>
          {!user.isLoggedIn && (
            <Route path="/mainpage" element={<NotFound/>}></Route>
          )}
          {user.isLoggedIn && (
            <>
              <Route
                path="/mainpage"
                element={<MainPage user={user} setUser={setUser} />}
              ></Route>
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
              <Route
                path="/id/:accountId"
                element={<ActualAccount accounts={accounts} />}
              />
            </>
          )}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
