import {
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
  Chart as ChartJS,
  registerables,
} from 'chart.js';
import { ComponentProps, useEffect, useRef } from 'react';

type Props = ComponentProps<'canvas'> & {
  config: ChartConfiguration | ChartConfigurationCustomTypesPerDataset;
};

const Chart = ({ config, ...rest }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chart = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    ChartJS.register(...registerables);
    chart.current = new ChartJS(canvasRef.current, config);

    return () => {
      if (chart.current) {
        chart.current.destroy();
        chart.current = null;
      }
    };
  }, [config]);

  return <canvas {...rest} ref={canvasRef} />;
};

export default Chart;
