import React, { useState, useEffect } from "react"
import { generate } from "shortid";
import { v4 } from "uuid"
const aId = generate()
const unrankedId = generate();



const usePendingTransactions = () => {


    const [deposits, setDeposits] = useState([ {
        id: v4(),
        type: "type",
        from: "from",
        to: "to",
        amount: "amount",
        txHash: "hash",
        time: "date",
      }])
    const [transactions, setTransactions] = React.useState([
        {
          id: v4(),
          type: "type",
          from: "from",
          to: "to",
          amount: "amount",
          txHash: "hash",
          time: "date",
          }
      ]);
      const [currentHash, setCurrentHash] = useState()
    
      React.useEffect(() => {

        const transactionData = localStorage.getItem("transactions");
        if (transactionData) {
          setTransactions(JSON.parse(transactionData));
        }

      }, []);
    
      React.useEffect(() => {

        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("transactions", JSON.stringify(transactions));
        localStorage.setItem("currentHash", currentHash);

      });

      return { transactions, setTransactions, deposits, setDeposits, currentHash, setCurrentHash}
}

export default usePendingTransactions