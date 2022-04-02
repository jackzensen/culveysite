import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} 
  from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { Chart, registerables } from 'chart.js'

import PieChart from './components/Charts/PieChart'
import './App.css';
import { getFlavors } from '../node-postgres/Flavor_model';
Chart.register(...registerables);

function App() {
  const [flavors, setFlavors] = useState(false);
  useEffect(() => {
    getFlavors();
  }, []);

function getFlavors(){
  fetch('http://localhost:3001')
    .then(response => {
      return response.text();
    })
    .then(data =>{
      setFlavors(data)
    });
}
  // function createFlavor(){
  //   let name = prompt("enter Flavor name");
  //   let email = prompt('Enter merchant email');
  //   fetch('http://localhost:3001/merchants', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({name, email})
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getFlavor()
  //     })
  // }

//   return (
//     <>
//       <Router>
//         <Navbar />
//           <Routes>
// //          <Route path='/' exact />
//           </Routes>
// //     </Router> 
//     <div className="App">
//       <PieChart />
//     </div>


//    </>


//   );
// }

// export default App;
