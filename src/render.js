import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {keyPressed} from "./state";

export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} keyPressed={keyPressed}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}