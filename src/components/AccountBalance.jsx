import React, { useState, useEffect } from "react";

const AccountBalance = () => {
    const [debitBalance, setDebitBalance] = useState(0);
    const [creditBalance, setCreditBalance] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0);
  
    /*
    const [accountBalance, setAccountBalance] = useState([]);
    setAccountBalance([{"string", 1000, date}, {}])

    [{"string1", 500, today}]

    new accountBalance = accountBalance.push(setAccountBalance);
    
    */

    useEffect(() => {
      fetchDebitsCreditsBalane();
    }, []);
  
    async function fetchDebitsCreditsBalane() {
      try {
        const balance1 = 12500;
        const balance2 = 65330;
  
        setDebitBalance(balance1);
        console.log(balance1);
        setCreditBalance(balance2);
        console.log(balance2);
        const accountBalance = balance2 - balance1;
        setAccountBalance(accountBalance);
  
      } catch (error) {
          console.error(error);
          console.log("Error fetching data");
      }
    }

    return (
        <div>
            <h2>Account balance: {accountBalance}</h2>
        </div>
    );
};

export default AccountBalance;
