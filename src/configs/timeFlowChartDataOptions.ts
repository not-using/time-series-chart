import { ChartDatasetCustomTypesPerDataset } from 'chart.js';
import { colors } from './colors';

export const AREA = 0;
export const BAR = 1;

export const timeFlowChartDataOptions: {
  area: ChartDatasetCustomTypesPerDataset<'line'>;
  bar: ChartDatasetCustomTypesPerDataset<'bar'>;
} = {
  area: {
    type: 'line',
    data: [],
    label: 'Area',
    backgroundColor: colors.chart.area,
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
    yAxisID: 'y2',
  },
};
