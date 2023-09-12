import { useState } from 'react';
import { styled } from 'styled-components';
import { type TimeFlowType } from 'types/TimeFlowType';
import { colors } from 'configs/colors';
import { chartAdaptor } from 'utils/chartAdaptor';
import { parseTimeFlow } from 'utils/parseTimeFlow';
import Chart from 'components/commons/Chart';

type Props = {
  timeFlow: TimeFlowType;
};

const TimeFlowFilterable = ({ timeFlow }: Props) => {
  const [selectedId, setSelectedId] = useState('');

  const { date, uniqueIds } = parseTimeFlow(timeFlow);
  const unset = { id: '', name: '전체보기' };

  return (
    <>
      <Location
        $isSelected={selectedId === unset.id}
        onClick={() => setSelectedId(unset.id)}
      >
        {unset.name}
      </Location>
      {uniqueIds.map((id) => (
        <Location
          key={id}
          $isSelected={id === selectedId}
          onClick={() => setSelectedId(id)}
        >
          {id}
        </Location>
      ))}
      <Chart config={chartAdaptor.timeFlowToChart(timeFlow, selectedId, setSelectedId)} />
      <Sub>{`${date} 기준`}</Sub>
    </>
  );
};

export default TimeFlowFilterable;

const color = colors.filters;

const Location = styled.button<{ $isSelected?: boolean }>`
  background-color: white;
  color: ${({ $isSelected }) => ($isSelected ? color.selected : color.normal)};
  border: 2px solid ${({ $isSelected }) => ($isSelected ? color.selected : color.normal)};
  border-radius: 16px;
  padding: 0.4rem 0.8rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const Sub = styled.p`
  margin: -24px 0 0 4%;
  font-size: 0.8rem;
  color: ${colors.sub};
`;
