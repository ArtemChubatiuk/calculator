import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import React from "react";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile keyPressed={props.keyPressed}/>
        </div>
    )
}

export default App;
