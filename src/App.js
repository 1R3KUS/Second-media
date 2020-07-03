import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Navbar />
          <div className="app-content">
            <Route path="/profile" render={ () => <Profile profilePageDB={props.state.profilePage} friends={props.state.friendsList.friends} newPostAdd={props.newPostAdd} changeTextArea={props.changeTextArea} />} />
            <Route exact path="/dialogs" render={ () => <Dialogs friends={props.state.friendsList.friends} message={props.state.messagesList.message} />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
