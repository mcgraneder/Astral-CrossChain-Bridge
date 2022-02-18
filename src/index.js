import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotificationProvider from "./components/Notifications/NotificationsProvider"

ReactDOM.render(
  <React.StrictMode>
    {/* <NotificationProvider> */}
      <App />
    {/* </NotificationProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


