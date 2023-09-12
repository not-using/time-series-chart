import { ChartDataCustomTypesPerDataset } from 'chart.js';
import { timeFlowChartOptions } from 'configs/timeFlowChartOptions';
import { TimeFlowDto } from 'types/TimeFlowDto';

export const chartDataAdaptor = (
  response: TimeFlowDto,
): ChartDataCustomTypesPerDataset => {
  const timeFlow = response.response;
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
};
