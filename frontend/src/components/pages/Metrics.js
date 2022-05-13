import React from 'react';
import '../../App.css';

// import App from '../../App.js'

import { useState, useEffect } from 'react';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Chart, registerables } from 'chart.js'

import ReactECharts from 'echarts-for-react';
import 'chartjs-plugin-colorschemes';
const axios = require('axios').default;


function Metrics() {


    const [startDate, setStartDate] = useState(new Date());
    // const [flavorData, setFlavorData] = useState(0);
    const handleChange = (date) => {
        setStartDate(date)

        // Fetch details

        // one is added because January is indexed at zero
        var month = date.getMonth() + 1
        var urlString = date.getFullYear() + '-' + month + '-' + date.getDate()

        async function makeGetRequest() {
            console.log('Requesting to: http://localhost:3001/flavors/date/' + urlString)
            var flavorCounts = {}
            let res =             await axios.get('http://localhost:3001/flavors/date/' + urlString).then(response => {
                console.log("success");
                console.log(response.data[1].flavor)
                console.log("length: " , response.data.length)
                for (var i = 0; i < response.data.length; i++){
                    if (flavorCounts.hasOwnProperty(response.data[i].flavor)) {
                        flavorCounts[response.data[i].flavor] += 1
                    }
                    else{
                        flavorCounts[response.data[i].flavor] = 1;
                    };
                }

                



                console.log("flavorcounts: ", flavorCounts)

                // Sort the results
                var sorted = Object.keys(flavorCounts).map(function(key){
                    return [key, flavorCounts[key]];
                });
                sorted.sort(function(first,second){
                    return second[1] - first[1]
                })
                
                var keyList = []
                var valueList = [];
                for (let i = 0; i < sorted.length; i++){
                    keyList.push(sorted[i][0])
                    valueList.push(sorted[i][1])
                }
                console.log('keylist:', keyList)
                console.log('valuelist:' , valueList)

                var ctx = document.getElementById('flavorChart');
                var flavorChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: keyList,
                        datasets: [{
                            label: "Flavor",
                            data: valueList
                        }]
                    }
                })



            }).catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('The request was made and the server responded with a status code that falls out of the range of 2xx')
                    console.log(error)
                    console.log(error.toJSON());
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log('The request was made but no response was received')
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Something happened in setting up the request that triggered an Error')
                    console.log('Error', error.message);
                  }
                  console.log(error.config);
                });
            
          }
        makeGetRequest()

    }

     return (
        <div className="App">
            <h1>Culvers Flavor Display Tool</h1>
            <p> Please select a date: </p>
            <div>
               <DatePicker className="App" dateFormat="yyyy/MM/dd" popperPlacement="top" selected={startDate} onChange={handleChange} />

            </div>
            
            <div class="chart-container" >
                <canvas id="flavorChart" width="100" height="100"></canvas>
            </div>
        </div>
     )}

export default Metrics;


