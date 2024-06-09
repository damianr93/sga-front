
import { LineChart } from '@mui/x-charts/LineChart';

const xLabels = [
  'ENERO',
  'FEBRERO',
  'MARZO',
  'ABRIL',
  'MAYO',
  'JUNIO',
  'JULIO',
  'AGOSTO',
];

type Serie = {
  medidoPor: string;
  measure: number;
  createdAt: string;
  _id:string
};

export default function SimpleLineChart({serie}: {serie: Serie[]}) {

  const serieChart = serie.map((registro) => {
    return registro.measure
  })

  return (
    <LineChart
      width={900}
      height={300}
      series={[
        { data: serieChart, label: 'Kwh' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}