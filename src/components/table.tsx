import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (
  name: string,
  medicion: number,
  fecha: string,
  id:string,
) => {
  return { name, medicion, fecha, id };
}

type Row = {
  medidoPor: string;
  measure: number;
  createdAt: string;
  _id:string
};


export default function BasicTable({rows}: { rows: Row[] }) {
const dataTable = rows.map((elem:Row) => {
  return createData(elem.medidoPor, elem.measure, elem.createdAt, elem._id)
})


  return (
    <TableContainer sx={{width:900}} component={Paper}>
      <Table sx={{ minWidth: 650, width:900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Nombre</TableCell>
            <TableCell  align="center">Consumo (Kwh)</TableCell>
            <TableCell  align="center">Fecha de medición</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  align="center">{row.medicion}</TableCell>
              <TableCell  align="center">{row.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}