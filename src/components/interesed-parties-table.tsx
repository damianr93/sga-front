import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (
  name: string,
  interes: string,
  id:string,
) => {
  return { name, interes, id };
}

type Row = {
  name: string;
  interes: string;
  id: string;
};


export default function PartiesBasicTable({rows}: { rows: Row[] }) {
const dataTable = rows.map((elem:Row) => {
  return createData(elem.name, elem.interes, elem.id)
})


  return (
    <TableContainer sx={{width:900}} component={Paper}>
      <Table sx={{ minWidth: 650, width:900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Parte interesada</TableCell>
            <TableCell  align="center">Requisito de la parte interesada</TableCell>
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
              <TableCell  align="left">{row.interes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}