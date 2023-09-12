import { useLoaderData } from 'react-router-dom';
import { type TimeFlowType } from 'types/TimeFlowType';
import { type ApiDto } from 'types/ApiDto';
import TimeFlowFilterable from './TimeFlowFilterable';

const TimeFlow = () => {
  const { response } = useLoaderData() as ApiDto<TimeFlowType>;

  return (
    <main>
      <h2>TimeFlow</h2>
      <TimeFlowFilterable timeFlow={response} />
    </main>
  );
};

export default TimeFlow;
