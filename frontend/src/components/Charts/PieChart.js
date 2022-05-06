// import React from 'react'
// import {Pie} from 'react-chartjs-2'
// import {Bar} from 'react-chartjs-2'
// import {ctx} from 'react-chartjs-2'

// const PieChart = () => {
//     return <div>
//         <Bar
//             data={{
//                 // datasets: [{
//                 //     data: [10,20,30]
//                 // }]

//                 labels: ['Red', 'Yellow', 'Blue'],
//             }}
//             height={600}
//             width={800}
//             // options={{

//             // }}
//         />
//     </div>
// }
// export default PieChart
import { Pie } from "react-chartjs-2";

import "../../App.css"
const data = {
    labels: ['red', 'blue', 'green', 'yellow'],
    datasets: [{
        data: [13, 12, 15, 49]
    }]
};

function PieChart() {
    return (
    <div>
        <h1>Pie Chart</h1>
        <div>
        <Pie data={data}/>
        </div>
    </div>
    );
}

export default PieChart;