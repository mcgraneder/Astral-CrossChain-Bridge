import React, { useState  } from "react"
import { v4 } from "uuid"

const usePendingTransactions = () => {
  
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
    
      React.useEffect(() => {
        const transactionData = localStorage.getItem("transactions");
        if (transactionData) {
          setTransactions(JSON.parse(transactionData));

        }
      }, []);
    
      React.useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
      });

      return { transactions, setTransactions }
}

export default usePendingTransactions