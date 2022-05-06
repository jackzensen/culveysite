
import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import {createRoot } from 'react-dom/client'
import App from './App.js'
import "./index.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
// const container = document.getElementById('app');
// const root = createRoot(container);
// 
const root = createRoot(document.getElementById("root"));


{/* <Router basename="/"> </Router> */}

// const express = require('express')
// const app = express()
// const port = 3001

// const flavor_model = require('./Flavor_model')

// app.use(express.json())
// app.use(function(req, res, next){
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();

// })
// app.get('/', (req, res) => {
// //   res.status(200).send('Hello World!');
//     flavor_model.getFlavors()
//     .then(response => {
//         res.status(200).send(response)
//     })
//     .catch(error => {
//         res.status(500).send(error)
//     })
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })

root.render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
  );
  
  reportWebVitals();

// root.render(
//     < App/>,
//      document.getElementById('root'));
//     // document.querySelector('#root'));

// ReactDOM.render(<App />, document.getElementById("root"));