import React from 'react';
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { getWeekData } from '../data/getWeekData';


const PieChart = () => {
    const categories = getWeekData();

    const labels = Object.keys(categories);

    const data = {
        labels: labels,
        datasets: [
            {
                backgroundColor: [
                    "rgb(255, 143, 167)",
                    "rgb(99, 255, 255)",
                    "rgb(255, 239, 99)",
                    "rgb(255, 156, 99)",
                    "rgb(125, 255, 99)",
                    "rgb(242, 99, 255)",
                ],
                borderColor: "rgb(255,255,255)",
                data: Object.values(categories)
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Past Week"
            }
        }
    }

    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    )
}

export default PieChart;