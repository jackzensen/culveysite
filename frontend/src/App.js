
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import React, {useState, useEffect} from 'react';
// import { Chart, registerables } from 'chart.js'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PieChart from './components/Charts/PieChart'
import './App.css';
import Home from './components/pages/Home';
import Map from './components/pages/Map';
import Metrics from './components/pages/Metrics';
// import './index.js'

const axios = require('axios').default;

//Create an instance to allow fetching requests
// const instance = axios.create({
//   baseURL: 'localhost:3001/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });


// Chart.register(...registerables);




// function App() {
const App = () => {

  // const [state, setState] = React.useState({
  //   checkbox: false,
  // });


  return(
    

      <>
      <Navigation />
        <Router>
            <Routes>
              <Route path='/' element={<Home /> } />
              <Route path='/home' element={<Home /> } />
              <Route path='/map' element={<Map /> } />
              <Route path='/Metrics' element={<Metrics /> } />
              <Route path="*" element={<Link to="/home" /> } />
            </Routes> 
        </Router> 



      {/* <div className="App"> */}
        {/* <PieChart /> */}
      {/* </div> */}

      
    </>


    );
  };

export default App;

