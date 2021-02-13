import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import configureStore from './configureStore';
import './index.css';
import reportWebVitals from './reportWebVitals';

const storeConfig = configureStore();

ReactDOM.render(
    <Provider store={storeConfig}>
      <Router history={createBrowserHistory()}>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
