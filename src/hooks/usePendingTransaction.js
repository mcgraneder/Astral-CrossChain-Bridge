import React, { useState, useEffect } from "react"
import { generate } from "shortid";
const aId = generate()
const unrankedId = generate();


const usePendingTransactions = () => {


    const [deposits, setDeposits] = useState([ {
        id: "Id",
        type: "type",
        from: "from",
        to: "to",
        amount: "amount",
        txHash: "hash",
        time: "date",
    }])

    const [notifications, setNotifications] = React.useState([{
        id: "id"
    }]);
    const [currentHash, setCurrentHash] = useState()
    
    React.useEffect(() => {

        const pendingDepositData = localStorage.getItem("pending-deposits");
        if (pendingDepositData) {
          setNotifications(JSON.parse(pendingDepositData));
        }

      }, []);
    
      React.useEffect(() => {

        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("notifications", JSON.stringify(notifications));
        localStorage.setItem("currentHash", currentHash);

      });

      return { notifications, setNotifications, deposits, setDeposits, currentHash, setCurrentHash}
}

export default usePendingTransactions