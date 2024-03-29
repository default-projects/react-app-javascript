import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';

import './assets/style/index.scss'
import { Router } from './router';
import configureStore from './store'
import { dataConst } from './store/constants/dataConst';
import reportWebVitals from './reportWebVitals';

const InitialData = { data: dataConst }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore(InitialData)}>
      <Router />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
