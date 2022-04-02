import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import { TransactionStateContext } from './contexts/transactionContext';
import { Web3Provider } from "@ethersproject/providers";
import NotificationProvider from './contexts/NotificationsContext';
import MetaMaskAccountProvider from "./contexts/tokensContext"

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
     <Web3ReactProvider getLibrary={getLibrary}>
       <NotificationProvider>
      <App />
      </NotificationProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

