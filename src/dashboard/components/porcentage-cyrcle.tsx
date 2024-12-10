import { PieChart } from '@mui/x-charts/PieChart';


export default function PorcentageCyrcle({ data }: any) {

  const extractSeries = (data: any) => {
    const selectedKeys = ['especial', 'metal', 'generales', 'agua', 'aguaLavadero'];
    return selectedKeys
      .filter(key => data[key] && data[key].serie)
      .map((key, index) => ({
        id: index,
        value: data[key].total,
        label: key,
      }));
  };

  const seriesList = extractSeries(data);

  return (

    <PieChart
      series={[
        {
          data: seriesList,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />


  );
}