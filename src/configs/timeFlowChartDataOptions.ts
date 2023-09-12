import { ChartDatasetCustomTypesPerDataset } from 'chart.js';

export const timeFlowChartDataOptions: {
  area: ChartDatasetCustomTypesPerDataset<'line'>;
  bar: ChartDatasetCustomTypesPerDataset<'bar'>;
} = {
  area: {
    type: 'line',
    data: [],
    label: 'Area',
    backgroundColor: 'rgba(253, 121, 144, 0.9)',
    yAxisID: 'y1',
    fill: true,
    pointStyle: false,
    tension: 0.2,
    borderWidth: 0,
  },
  bar: {
    type: 'bar',
    data: [],
    label: 'Bar',
    backgroundColor: 'rgba(157, 161, 255)',
    yAxisID: 'y2',
  },
};
