import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
        </div>
    )
}

export default App;
