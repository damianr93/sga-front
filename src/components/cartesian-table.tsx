import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const xLabels = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  'JULIO',
  'AGOSTO',
  'SEPTIEMBRE',

];

export default function CartesianTable({ data }: any) {

  const extractSeries = (data: any) => {
    const selectedKeys = ['especial', 'metal', 'generales', "agua", "aguaLavadero"];
    return selectedKeys
      .filter(key => data[key] && data[key].serie)
      .map(key => ({
        id: key,
        label: key,
        data: data[key].serie,
      }));
  };

  const seriesList = extractSeries(data);

  return (
    <LineChart
      height={300}
      series={seriesList && seriesList }
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        ".MuiLineElement-series-pvId": {
          strokeDasharray: "5 5",
        },
        ".MuiLineElement-series-uvId": {
          strokeDasharray: "3 4 5 2",
        },
        ".MuiLineElement-series-xvId": {
          strokeDasharray: "3 4 5 2",
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
          {
            fill: "#fff",
          },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: "none",
        },
      }}
    />
  );
}
