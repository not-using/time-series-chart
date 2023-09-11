import { useLoaderData } from 'react-router-dom';
import { TimeFlowDto } from 'types/TimeFlowDto';
import { chartDataAdaptor } from 'utils/chartDataAdaptor';
import Chart from 'components/commons/Chart';

const TimeFlow = () => {
  const response = useLoaderData() as TimeFlowDto;
  const data = chartDataAdaptor(response);

  return (
    <main>
      <h2>TimeFlow</h2>
      <Chart config={{ type: 'line', data }} />
    </main>
  );
};

export default TimeFlow;
