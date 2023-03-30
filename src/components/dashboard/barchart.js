import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
    const data = [44, 55, 41, 67, 22, 43];

    const chartOptions = {
        series: [{
            name: 'Quantity',
            data: data,
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Apples', 'Oranges', 'Strawberries', 'Bananas', 'Mangos', 'Pineapples'],
            },
            yaxis: {
                title: {
                    text: 'Fruit Quantity',
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + ' units';
                    },
                },
            },
        },
    };

    return (
        <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="bar"
            height={350}
        />
    );
};

export default BarChart;
