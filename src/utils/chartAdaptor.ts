import {
  type ChartConfigurationCustomTypesPerDataset,
  type ChartDataCustomTypesPerDataset,
} from 'chart.js';
import { type TimeFlowType } from 'types/TimeFlowType';
import { timeFlowChartOptions } from 'configs/timeFlowChartOptions';

export const chartAdaptor = {
  timeFlowToChart(timeFlow: TimeFlowType): ChartConfigurationCustomTypesPerDataset {
    const data = chartAdaptor.timeFlowToChartData(timeFlow);
    const options = timeFlowChartOptions;
    return { data, options };
  },

  timeFlowToChartData(timeFlow: TimeFlowType): ChartDataCustomTypesPerDataset {
    const options = timeFlowChartOptions;
    const axises = Object.keys(options.scales || {});
    return {
      labels: Object.keys(timeFlow),
      datasets: [
        {
          type: 'line',
          label: 'Area',
          data: Object.values(timeFlow).map(({ value_area }) => value_area),
          fill: true,
          yAxisID: axises[0],
        },
        {
          type: 'bar',
          label: 'Bar',
          data: Object.values(timeFlow).map(({ value_bar }) => value_bar),
          yAxisID: axises[1],
        },
      ],
    };
  },
};
