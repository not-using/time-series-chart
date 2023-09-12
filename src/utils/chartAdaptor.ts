import { ActiveElement, ChartEvent, type ChartDataCustomTypesPerDataset } from 'chart.js';
import { type TimeFlowType } from 'types/TimeFlowType';
import { BAR, timeFlowChartDataOptions } from 'configs/timeFlowChartDataOptions';
import { timeFlowChartOptions } from 'configs/timeFlowChartOptions';
import { colors } from 'configs/colors';
import { parseTimeFlow } from './parseTimeFlow';

export const chartAdaptor = {
  timeFlowToChart(
    timeFlow: TimeFlowType,
    selectedId: string,
    setSelectedId: (value: string) => void,
  ) {
    const data = this.timeFlowToChartData(timeFlow);
    data.datasets[BAR].backgroundColor = this.createColorArray(timeFlow, selectedId);

    const options = timeFlowChartOptions;
    options.onClick = this.createClickEvent(timeFlow, setSelectedId);

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

  createColorArray(timeFlow: TimeFlowType, selected: string) {
    const { length, getIdByIndex } = parseTimeFlow(timeFlow);
    const isSelected = (index: number) => selected === getIdByIndex(index);

    return Array.from({ length }).map((_, index) =>
      isSelected(index) ? colors.chart.selected : colors.chart.bar,
    );
  },

  createClickEvent(timeFlow: TimeFlowType, onClick: (id: string) => void) {
    const { getIdByIndex } = parseTimeFlow(timeFlow);
    return (_: ChartEvent, elements: ActiveElement[]) => {
      if (!elements[BAR]) return;
      const clickedId = getIdByIndex(elements[BAR].index);
      onClick(clickedId);
    };
  },
};
