import React, { useState, useEffect } from "react"
import { generate } from "shortid";
const aId = generate()
const unrankedId = generate();

const usePendingTransactions = () => {


    const [pendingTransactions, setPendingTransactions] = React.useState([]);
    const [currentHash, setCurrentHash] = useState()
    const [deposits, setDeposits] = React.useState([
        {
            id: unrankedId,
            from: "address",
            amount: "number",
            time: "Date"
          }
      ]);
    
      React.useEffect(() => {

        const depositData = localStorage.getItem("deposits");

        if (depositData) {
          setDeposits(JSON.parse(depositData));
        }

        const pendingDepositData = localStorage.getItem("pending-deposits");
        if (pendingDepositData) {
          setPendingTransactions(JSON.parse(pendingDepositData));
        }

        const currentHashData = localStorage.getItem("currentHash");
        if (currentHashData) {
          setCurrentHash(currentHashData);
        }

      }, []);
    
      React.useEffect(() => {

        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("pending-deposits", JSON.stringify(pendingTransactions));
        localStorage.setItem("currentHash", currentHash);

      });

      return { pendingTransactions, setPendingTransactions, deposits, setDeposits, currentHash, setCurrentHash}
}

export default usePendingTransactions