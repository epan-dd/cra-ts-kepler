import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit'

import logo from './logo.svg';
import './App.css';

const reducer = (prevState: any, action: any) => ({})
const reducers = combineReducers({
  keplerGl: reducer,
})

const store = createStore(reducers, {})

function App() {
  return (
    <Provider store={store}>
      <Thingy />
    </Provider>
  )
}

function Thingy() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
