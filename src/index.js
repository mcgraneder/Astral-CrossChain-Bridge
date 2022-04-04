import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import { TransactionStateContext } from './contexts/transactionContext';
import { Web3Provider } from "@ethersproject/providers";
import NotificationProvider from './contexts/NotificationsContext';
import MetaMaskAccountProvider from "./contexts/tokensContext"
import store from './Store/store';
import { Provider } from 'react-redux';
import { TransactionProvider } from "./contexts/transactionContext";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <TransactionProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
        </TransactionProvider>
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

