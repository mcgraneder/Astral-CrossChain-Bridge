import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import NotificationProvider from './contexts/NotificationsContext';
import store from './Store/store';
import { Provider } from 'react-redux';
import { TransactionProvider } from "./contexts/transactionContext";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

ReactDOM.render(
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <TransactionProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
        </TransactionProvider>
      </Web3ReactProvider>
    </Provider>,
  document.getElementById('root')
);

