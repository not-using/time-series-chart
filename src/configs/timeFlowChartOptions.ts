import { ChartOptions } from 'chart.js';

export const timeFlowChartOptions: ChartOptions = {
  interaction: {
    intersect: false,
    mode: 'index',
  },
  scales: {
    y1: {
      type: 'linear',
      position: 'left',
      suggestedMax: 200,
      ticks: {
        stepSize: 50,
      },
    },
    y2: {
      type: 'linear',
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      suggestedMax: 20000,
      ticks: {
        stepSize: 5000,
      },
    },
  },
};
