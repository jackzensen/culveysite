import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Chart, registerables } from 'chart.js'
import Navbar from './components/Navbar';
import PieChart from './components/Charts/PieChart'

import Home from './components/pages/Home'
import Map from './components/pages/Map'
Chart.register(...registerables);

function App(){
    const [flavors, setFlavors] = useState(false);
    useEffect(() => {
        getFlavor();
    }, []);

function getFlavor() {
    fetch('http://localhost:3001')
        .then(response => {
            return response.text();
        })
        .then(data => {
            setFlavors(data);
        })
}

    return (
        <>

            {/* <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/map'>Map</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}

                <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />    
                        <Route path="/map/*" element={<Map />} />
                    </Routes> 
                </BrowserRouter>

                    {/* <div className="App">
                        <PieChart />
                    </div>  */}



            <div>   
                {flavors ? flavors : 'No flavors found'}
                <br />
            </div>



{/* 




    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/Map' component={Map} />

        </Routes>
    </BrowserRouter>  */}

        </>

    );
}

export default App