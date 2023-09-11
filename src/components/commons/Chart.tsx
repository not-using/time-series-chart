import { ChartConfiguration, Chart as ChartJS, registerables } from 'chart.js';
import { ComponentProps, useEffect, useRef } from 'react';

type Props = ComponentProps<'canvas'> & ChartConfiguration;
const Chart = ({ type, data, options, plugins, ...rest }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chart = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    ChartJS.register(...registerables);
    chart.current = new ChartJS(canvasRef.current, { type, data, options, plugins });

    return () => {
      if (chart.current) {
        chart.current.destroy();
        chart.current = null;
      }
    };
  }, [data, options, plugins, type]);

  return <canvas {...rest} ref={canvasRef} />;
};

export default Chart;
