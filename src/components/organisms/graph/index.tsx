import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

export type HighchartsDataType = {
  type: string;
  data: number[];
  name: string;
};

type GraphProps = {
  populationData: HighchartsDataType[];
};

export const Graph = ({ populationData }: GraphProps) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options = {
    title: {
      text: '人口推移',
    },
    chart: {
      backgroundColor: '#ffeefc79',
      borderRadius: '10px',
    },
    series: populationData,
    xAxis: {
      categories: Array.from(Array(14).keys(), (x) => 1980 + x * 5),
      title: {
        text: '年度',
      },
    },
    yAxis: {
      title: {
        text: '人口',
      },
    },
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};
