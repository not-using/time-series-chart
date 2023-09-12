import { useLoaderData } from 'react-router-dom';
import { type TimeFlowType } from 'types/TimeFlowType';
import { type ApiDto } from 'types/ApiDto';
import TimeFlowFilterable from './TimeFlowFilterable';
import { styled } from 'styled-components';

const TimeFlow = () => {
  const { response } = useLoaderData() as ApiDto<TimeFlowType>;

  return (
    <main>
      <Title>TimeFlow</Title>
      <TimeFlowFilterable timeFlow={response} />
    </main>
  );
};

export default TimeFlow;

const Title = styled.h2`
  margin: 16px 32px;
  &:after {
    content: '아래 지역을 클릭하면 해당 지역만 색이 변합니다';
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 16px;
    color: gray;
  }
`;
