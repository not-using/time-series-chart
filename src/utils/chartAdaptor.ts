import {
  type ChartConfigurationCustomTypesPerDataset,
  type ChartDataCustomTypesPerDataset,
} from 'chart.js';
import { type TimeFlowType } from 'types/TimeFlowType';
import { timeFlowChartOptions } from 'configs/timeFlowChartOptions';
import { timeFlowChartDataOptions } from 'configs/timeFlowChartDataOptions';

export const chartAdaptor = {
  timeFlowToChart(timeFlow: TimeFlowType): ChartConfigurationCustomTypesPerDataset {
    const data = chartAdaptor.timeFlowToChartData(timeFlow);
    const options = timeFlowChartOptions;
    return { data, options };
  },

  timeFlowToChartData(timeFlow: TimeFlowType): ChartDataCustomTypesPerDataset {
    return {
      labels: Object.entries(timeFlow).map(
        ([key, value]) => `${value.id} ${key.split(' ')[1]}`,
      ),
      datasets: [
        {
          ...timeFlowChartDataOptions.area,
          data: Object.values(timeFlow).map(({ value_area }) => value_area),
        },
        {
          ...timeFlowChartDataOptions.bar,
          data: Object.values(timeFlow).map(({ value_bar }) => value_bar),
        },
      ],
    };
  },
};
