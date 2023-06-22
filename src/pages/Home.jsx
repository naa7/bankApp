import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Credits from "./Credits";
import Debits from "./Debits";
import axios from "axios";

const Home = () => {

  const [userName, setUserName] = useState("John Doe");
  const [accountNumber, setAccountNumber] = useState("245 537 856");
  const [debitBalance, setDebitBalance] = useState([]);
  const [creditBalance, setCreditBalance] = useState([]);
  const [accountBalance, setAccountBalance] = useState(0);
  const [debitTransactionsList, setDebitTransactionsList] = useState([]);
  const [creditTransactionsList, setCreditTransactionsList] = useState([]);

  

    useEffect(() => {
      fetchDebitsCreditsBalane();
    },[]);

    useEffect(() => {
      const totalDebitBalance = debitBalance.reduce((total, current) => total + current, 0);
      const totalCreditBalance = creditBalance.reduce((total, current) => total + current, 0);
      const calculatedAccountBalance = totalCreditBalance - totalDebitBalance;
  
      setAccountBalance(calculatedAccountBalance);
    }, [debitBalance, creditBalance]);
  
    async function fetchDebitsCreditsBalane() {
      try {
        const response1 = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits');
        const response2 = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits');

        const debit = response1.data;
        const credit = response2.data;
        setDebitBalance([...debitBalance, debit]);
        setCreditBalance([...creditBalance, credit]);
        
      } catch (error) {
          console.error(error);
          console.log("Error fetching data");
      }
    }

  return (
    <div>
      <h1>Welcome to Bank of React, {userName}</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/debits">Debits</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
        <h2>Account Number: {accountNumber}</h2>
        <h2>Account Balance: {accountBalance}</h2>
        <Routes>
          <Route path="/debits/*" element={<Debits debitBalance = {debitBalance} accountBalance = {accountBalance} setDebitBalance = {setDebitBalance} debitTransactionsList = {debitTransactionsList} setDebitTransactionsList = {setDebitTransactionsList}/>} />
          <Route path="/credits/*" element={<Credits creditBalance = {creditBalance} accountBalance = {accountBalance} setCreditBalance = {setCreditBalance} creditTransactionsList = {creditTransactionsList} setCreditTransactionsList = {setCreditTransactionsList}/>} />
        </Routes>
    </div>
  );
};

export default Home;