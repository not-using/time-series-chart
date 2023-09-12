import { useLoaderData } from 'react-router-dom';
import { TimeFlowDto } from 'types/TimeFlowDto';
import { chartDataAdaptor } from 'utils/chartDataAdaptor';
import { timeFlowChartOptions } from 'configs/timeFlowChartOptions';
import Chart from 'components/commons/Chart';

const TimeFlow = () => {
  const response = useLoaderData() as TimeFlowDto;
  const data = chartDataAdaptor(response);
  const options = timeFlowChartOptions;

  return (
    <main>
      <h2>TimeFlow</h2>
      <Chart config={{ type: 'line', data, options }} />
    </main>
  );
};

export default TimeFlow;
