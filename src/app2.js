// //  //  useEffect(() => {

// //     //      if(library && ren) {
// //     //         ren.on("Approval", (from, to , value) => {
// //     //             // console.log(from, to, value)
// //     //             console.log("helloooooooooooooo")
// //     //             setTimeout(() => {
// //     //                 pendingTransactions.pop()
// //     //                 setPendingTransactions(pendingTransactions)
// //     //             }, 10000)
// //     //         });

// //     //         ren.on("Transfer", (from, to , value) => {
// //     //             console.log(from, to, value)
// //     //             setTimeout(() => {
// //     //                 console.log("helloooooooooooooo")
// //     //                 pendingTransactions.pop()
// //     //                 setPendingTransactions(pendingTransactions)
// //     //             }, 10000)
// //     //         });

// //     //         // if(currentHash.length > 1 && currentHash == undefined) {

//                //  library.getTransaction(currentHash).then((result) => {
//                //      if(!result.blockNumber) {
//                //          setLoading(true)
//                //      } 
//                //  })
//             // }



// //     //      }
// //     //  }, [library])

// //     useEffect(() => {

// //       if(library && ren) {
// //           ren.on("Approval", (from, to , value) => {
// //              setShowNotifications(true)
             
// //           });

// //           ren.on("Transfer", (result) => {
// //               console.log(result)
// //               setShowNotifications(true)
// //           });
// //        }
// //    }, [library])


// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import Web3 from "web3";
// import RenJS from "@renproject/ren";
// import { Bitcoin, Ethereum } from "@renproject/chains";

// import ABI from "./ABI.json";
// import ABI2 from "./AB12.json"
// //0x74B6aC59285f67953d50E54019724eb7973a71c2
// const contractAddress = "0x12762d65155afb584E9BE4127C25168Cc151C37F"
// const renBtcAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       balance: 0,
//       message: "",
//       error: "",
//       renJS: new RenJS("testnet", { useV2TransactionFormat: true }),
//     };
//   }

//   componentDidMount = async () => {
//     let web3Provider;
   
//     // Initialize web3 (https://medium.com/coinmonks/web3-js-ethereum-javascript-api-72f7b22e2f0a)
//     // Modern dApp browsers...
//     if (window.ethereum) {
//       web3Provider = window.ethereum;
//       try {
//         // Request account access
//         await window.ethereum.enable();
//       } catch (error) {
//         // User denied account access...
//         this.logError("Please allow access to your Web3 wallet.");
//         return;
//       }
//     }
//     // Legacy dApp browsers...
//     else if (window.web3) {
//       web3Provider = window.web3.currentProvider;
//     }
//     // If no injected web3 instance is detected, fall back to Ganache
//     else {
//       this.logError("Please install MetaMask!");
//       return;
//     }

//     const web3 = new Web3(web3Provider);

//     const networkID = await web3.eth.net.getId();
//     if (networkID !== 42) {
//       this.logError("Please set your network to Kovan.");
//       return;
//     }

//     this.setState({ web3 }, () => {
//       // Update balances immediately and every 10 seconds
//       this.updateBalance();
//       setInterval(() => {
//         this.updateBalance();
//       }, 10 * 1000);
//     });
//   };

 
//   render = () => {
//     const { balance, message, error } = this.state;
//     return (
//       <div className="App">
//         <p>Balance: {balance} BTC</p>
//         <p>
//           <button onClick={() => this.deposit().catch(this.logError)}>
//             Deposit 0.003 BTC
//           </button>
//         </p>
//         <p>
//           <button onClick={() => this.withdraw().catch(this.logError)}>
//             Withdraw {balance} BTC
//           </button>
//         </p>
//         <p>
//           <button onClick={() => this.transfer().catch(this.logError)}>
//             Transfer {balance} BTC to wallet
//           </button>
//         </p>
//         <p>
//           <button onClick={() => this.transferFrom().catch(this.logError)}>
//             Transfer BTC from wallet to bridge
//           </button>
//         </p>
//         {message.split("\n").map((line) => (
//           <p>{line}</p>
//         ))}
//         {error ? <p style={{ color: "red" }}>{error}</p> : null}
//       </div>
//     );
//   };

//   updateBalance = async () => {
//     const { web3 } = this.state;
//     const contract = new web3.eth.Contract(ABI, contractAddress);
//     const balance = await contract.methods.getContractTokenbalance("BTC").call();
//     this.setState({ balance: parseInt(balance.toString()) / 10 ** 8 });
//   };

//   logError = (error) => {
//     console.error(error);
//     this.setState({ error: String((error || {}).message || error) });
//   };

//   log = (message) => {
//     this.setState({ message });
//   };

//   deposit = async () => {

//     const { web3, renJS } = this.state;
//     const contract = new web3.eth.Contract(ABI, contractAddress);
//     this.logError(""); // Reset error

    

//     this.log(`Generating deposit address...`);

//     const amount = 0.002// BTC
//     await contract.methods.lockAndMintInitialized("BTC", web3.utils.toWei(amount.toString(), "ether")).send({from: "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"})
//     const BTC = "BTC";
//     const mint = await renJS.lockAndMint({
//       // Send BTC from the Bitcoin blockchain to the Ethereum blockchain.
//       asset: "BTC",
//       from: Bitcoin(),
//       to: Ethereum(web3.currentProvider).Contract({
//         // The contract we want to interact with
//         sendTo: contractAddress,

//         // The name of the function we want to call
//         contractFn: "deposit",

//         // Arguments expected for calling `deposit`
//         contractParams: [
//           {
//             name: "_msg",
//             type: "bytes",
//             value: Buffer.from(`Depositing ${amount} BTC`),
//           },
//         ],
//       }),
//     });

//     // Show the gateway address to the user so that they can transfer their BTC to it.
//     this.log(`Deposit ${amount} BTC to ${mint.gatewayAddress}`);

//     mint.on("deposit", async (deposit) => {
//       // Details of the deposit are available from `deposit.depositDetails`.

//       const hash = deposit.txHash();
//       const depositLog = (msg) =>
//         this.log(
//           `BTC deposit: ${Bitcoin.utils.transactionExplorerLink(
//             deposit.depositDetails.transaction,
//             "testnet"
//           )}\n
//           RenVM Hash: ${hash}\n
//           Status: ${deposit.status}\n
//           ${msg}`
//         );

//       await deposit
//         .confirmed()
//         .on("target", (target) => depositLog(`0/${target} confirmations`))
//         .on("confirmation", (confs, target) =>
//           depositLog(`${confs}/${target} confirmations`)
//         );

//       await deposit
//         .signed()
//         // Print RenVM status - "pending", "confirming" or "done".
//         .on("status", (status) => depositLog(`Status: ${status}`)).then(function() {

//           console.log("finished")
//         });

//       await deposit
//         .mint()
//         // Print Ethereum transaction hash.
//         .on("transactionHash", (txHash) => depositLog(`Mint tx: ${txHash}`)).then(function() {

//           console.log("finishesssssssssssssss")
//         });;

//       console.log(`Deposited ${amount} BTC.`);
//     });
//   };

//   withdraw = async () => {
//     this.logError(""); // Reset error

//     const { web3, renJS, balance } = this.state;
//     const contract = new web3.eth.Contract(ABI, contractAddress);
//     const amount = 0.001;
//     // await contract.methods.burnAndReleaseInitialized("BTC", web3.utils.toWei(amount.toString(), "ether")).send({from: "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"})

//     const recipient = prompt("Enter BTC recipient:");
//     const burnAndRelease = await renJS.burnAndRelease({
//       // Send BTC from Ethereum back to the Bitcoin blockchain.
//       asset: "BTC",
//       to: Bitcoin().Address(recipient),
//       from: Ethereum(web3.currentProvider).Contract((btcAddress) => ({
//         sendTo: contractAddress,

//         contractFn: "withdraw",

//         contractParams: [

//           {
//             type: "bytes",
//             name: "_msg",
//             value: Buffer.from(`Withdrawing ${amount} BTC`),
//           },
//           {
//             type: "bytes",
//             name: "_to",
//             value: btcAddress,
//           },
//           {
//             type: "uint256",
//             name: "_amount",
//             value: RenJS.utils.toSmallestUnit(amount, 8),
//           },
//         ],
//       })),
//     });

//     let confirmations = 0;
//     await burnAndRelease
//       .burn()
//       // Ethereum transaction confirmations.
//       .on("confirmation", (confs) => {
//         confirmations = confs;
//       })
//       // Print Ethereum transaction hash.
//       .on("transactionHash", (txHash) =>
//         this.log(`Ethereum transaction: ${String(txHash)}\nSubmitting...`)
//       );

//     await burnAndRelease
//       .release()
//       // Print RenVM status - "pending", "confirming" or "done".
//       .on("status", (status) =>
//         status === "confirming"
//           ? this.log(`${status} (${confirmations}/15)`)
//           : this.log(status)
//       )
//       // Print RenVM transaction hash
//       .on("txHash", (hash) => this.log(`RenVM hash: ${hash}`));

//     this.log(`Withdrew ${amount} BTC to ${recipient}.`);
//   };

//   transfer = async () => {

//     const { web3, renJS } = this.state;
//     const contract = new web3.eth.Contract(ABI, contractAddress);
//     this.logError(""); // Reset error

    

//     this.log(`Transfering Your RenBTC to your wallet...`);

//     const amount = await contract.methods.getUserbalanceInContract("BTC").call({from : "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"})
//     console.log(amount)
//     await contract.methods.transfer("0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113", amount, "BTC")
//     .send({from: "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"})

//     this.log(`Success`);
    
//   };

//   transferFrom = async () => {

//     const { web3, renJS } = this.state;
//     const contract = new web3.eth.Contract(ABI, contractAddress);
//     const renBtcContract = new web3.eth.Contract(ABI2, renBtcAddress);

//     this.logError(""); // Reset error

//     this.log(`Depositing RenBtc from your wallet...`);

//     const amount = await renBtcContract.methods.balanceOf("0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113").call()// BTC
//     console.log(amount)
//     await renBtcContract.methods.approve(contractAddress, amount).send({from: "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"});

//     const allowance = await contract.methods.tokenAllowance("0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113", contractAddress, "BTC").call();
//     console.log(allowance)
//     await contract.methods.transferFrom("0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113", "0x12762d65155afb584E9BE4127C25168Cc151C37F", amount, "BTC" )
//     .send({from: "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"})

//     this.log(`Success`);
    
//   };
// }

// export default App;

 //    useEffect(() => {
        
    //       deposits.map((deposit, i) => {
    //          if(i > 0) {
    //              console.log(deposit.txHash)
    //              library.getTransaction(deposit.txHash).then((result) => {
    //                  console.log(result)
    //                  if(result.blockNumber) {
 
    //                      // setTransactionBlock(true)
    //                  } 
    //              })
    //          }
    //       })
    //    }, [deposits])