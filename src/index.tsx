import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
