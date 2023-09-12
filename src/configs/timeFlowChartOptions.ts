import { ChartOptions } from 'chart.js';

export const timeFlowChartOptions: ChartOptions = {
  interaction: {
    intersect: false,
    mode: 'index',
  },
  scales: {
    y1: {
      type: 'linear',
      title: { display: true, text: 'Area' },
      position: 'left',
      suggestedMax: 200,
      ticks: {
        stepSize: 50,
      },
    },
    y2: {
      type: 'linear',
      title: { display: true, text: 'Bar' },
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      suggestedMax: 20000,
      ticks: {
        stepSize: 5000,
      },
    },
    x: {
      afterUpdate(axis) {
        axis.ticks.forEach((value) => {
          value.label =
            typeof value.label === 'string' ? value.label.split(' ')[1] : value.label;
        });
      },
      ticks: {
        maxRotation: 0,
      },
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  animation: false,
};
