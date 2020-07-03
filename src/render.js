import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { newPostAdd, changeTextArea } from './redux/state';


export let rerenderPage = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} newPostAdd={newPostAdd} changeTextArea={changeTextArea}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}