import { useLoaderData } from 'react-router-dom';
import { type TimeFlowType } from 'types/TimeFlowType';
import { type ApiDto } from 'types/ApiDto';
import { chartAdaptor } from 'utils/chartAdaptor';
import Chart from 'components/commons/Chart';

const TimeFlow = () => {
  const { response } = useLoaderData() as ApiDto<TimeFlowType>;
  const config = chartAdaptor.timeFlowToChart(response);

  return (
    <main>
      <h2>TimeFlow</h2>
      <Chart config={config} />
    </main>
  );
};

export default TimeFlow;
