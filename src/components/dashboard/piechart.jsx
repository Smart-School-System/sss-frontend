import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({dataValues, labels, colors, borderColors}) => {
    const data = {
      series: [...dataValues],
      labels: [...labels],
    };
    
    const options = {
        chart: {
            type: 'pie',
        },
        labels: data.labels,
        colors:[...colors],
         stroke: {
        colors:[...borderColors],
        width: 1, 
      }
      ,
       dataLabels: {
        enabled: false
    },
    tooltip: {
    enabled: true,
    style: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    },
    
    };
  return (
      <Chart options={options} series={data.series} type="pie" width={300}/>
  );
};

export default PieChart;
