import React from 'react';
import '../../App.css';

// import App from '../../App.js'

import { useState, useEffect } from 'react';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { VictoryPie } from 'victory';
// import 'chartjs-plugin-colorschemes';
import { Chart, registerables } from 'chart.js'
// import PieChart from '../Charts/PieChart'

// import patternomaly
// import {draw, generate} from 'patternomaly'
// Chart.register(...registerables);
import ReactECharts from 'echarts-for-react';

const axios = require('axios').default;

function Metrics() {
    const Page: React.FC = () => {
        const option = {
            title: {
                text: 'Culvers Flavors',
                subtext: 'Number of restaurants',
                x: 'center'
            },
            tooltip:{
                trigger:'item',
                formatter:"{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: {keys}
            },
            series : [
                {
                name : 'Culvers Flavor Chart',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                  ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    }
                }
                }
            ]
        }

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
                var keys = Object.keys(flavorCounts)
                var values = Object.values(flavorCounts);
                console.log(values)

                console.log(keys)


                // // <script>
                // // Create chart


                var ctx = document.getElementById('flavorChart');
                var flavorChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: keys,
                        datasets: [{
                            label: "Flavor",
                            data: values
                        }]
                    }
                })
                // flavorChart.update()

                // var img = new Image();
                // // img.src = 'https://cdn.vectorstock.com/i/1000x1000/60/16/colorful-bright-rainbow-spiral-background-logo-des-vector-3476016.webp';
                // img.src = 'https://www.truevalue.com/media/magefan_blog/color-wheel-hero_1.jpg';
                // // img.src = 'https://example.com/my_image.png';
                // img.onload = function() {
                    // var ctx = document.getElementById('flavorChart').getContext('2d');
                    // // var fillPattern = ctx.createPattern(img, 'repeat');

                    // // if (flavorChart){
                    // //     flavorChart.destroy()
                    // // }

                    // var flavorChart = new Chart(ctx, {
                    //     type: 'pie',
                    //     data: {
                    //         labels: keys,
                    //         datasets: [{
                    //             label: "Flavor",
                    //             data: values,
                    //             // backgroundColor: fillPattern,
                    //             // backgroundColor: [
                    //             //     pattern.draw('square', '#1f77b4'),
                    //             //     pattern.draw('circle', '#ff7f0e'),
                    //             //     pattern.draw('diamond', '#2ca02c'),
                    //             //     pattern.draw('zigzag-horizontal', '#17becf'),
                    //             //     pattern.draw('triangle', 'rgb(255, 99, 132, 0.4)') // with opacity
                    //             //   ],
                    //             borderWidth: 1
                    //         }]

                    //     },

                    // });
                //     flavorChart.update()
                // };

                // </script> 
                // var PieChart = <VictoryPie data={flavorCounts} />


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
            
            
            <canvas id="flavorChart" width="400" height="400"></canvas>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
                onChartReady={onChartReady}
                onEvents={{
                    'click': onChartClick,
                    'legendselectchanged': onChartLegendselectchanged
                }}
            />
            {/* <PieChart /> */}

        </div>
     )}

            }
export default Metrics;


