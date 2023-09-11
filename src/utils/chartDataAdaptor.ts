import { ChartDataCustomTypesPerDataset } from 'chart.js';
import { TimeFlowDto } from 'types/TimeFlowDto';

export const chartDataAdaptor = (
  response: TimeFlowDto,
): ChartDataCustomTypesPerDataset => {
  const timeFlow = response.response;
  return {
    labels: Object.keys(timeFlow),
    datasets: [
      {
        type: 'line',
        label: 'Area',
        data: Object.values(timeFlow).map(({ value_area }) => value_area),
        fill: true,
      },
      {
        type: 'bar',
        label: 'Bar',
        data: Object.values(timeFlow).map(({ value_bar }) => value_bar),
      },
    ],
  };
};
