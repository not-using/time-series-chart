import { type TimeFlowType } from 'types/TimeFlowType';

export const parseTimeFlow = (timeFlow: TimeFlowType) => {
  const length = Object.keys(timeFlow).length;
  const [[date]] = Object.keys(timeFlow).map((timeStamp) => timeStamp.split(' '));
  const uniqueIds = [...new Set(Object.values(timeFlow).map(({ id }) => id))];

  const getIdByIndex = (index: number) => {
    return Object.values(timeFlow)[index].id;
  };
  return { length, date, uniqueIds, getIdByIndex };
};
