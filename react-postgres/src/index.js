import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.js'
import "./index.css"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root'))