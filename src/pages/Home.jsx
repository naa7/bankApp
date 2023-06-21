import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Credits from "./Credits";
import Debits from "./Debits";

const Home = () => {
  
  const [userName, setUserName] = useState("naa7");
  const [accountNum, setAccountNum] = useState("123456789");
  const [accountTotal, setAccountTotal] = useState(0);

  const navigate = useNavigate();

  const navigateDebitPage = () => {
    return navigate("/debits");
  }

  const navigateCreditPage = () => {
    return navigate("/credits");
  }

  return (
    <div>
      <h1>Welcome to bank of React, {userName}</h1>
      <button onClick={navigateDebitPage}>Add a Debit</button>
      <button onClick={navigateCreditPage}>Add a Credit</button>
      <h2>Account Number: {accountNum}</h2>
      <h3>Account Total: {accountTotal}</h3>

      <Routes>
        <Route path="debits" element={<Debits />}/>
        <Route path="credits" element={<Credits />}/>
      </Routes>
    </div>
  );
};

export default Home;
