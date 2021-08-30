import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render( <Provider store={store}><App /> </Provider>  , document.getElementById('root'));
