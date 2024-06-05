import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styled from 'styled-components';

const StyledTableCell = styled(TableCell)(() => ({
  '&.MuiTableCell-head': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
    backgroundColor: 'white',
  },
}));

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  cursor: pointer;
`;


function createData(
  name: string,
  tipo:string,
  medicion: number,
  fecha: string,
  proximaFecha: string,
) {
  return {
    name,
    tipo,
    medicion,
    fecha,
    proximaFecha,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <StyledButton
            aria-label="expand row"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowDropUpIcon sx={{color:'white'}}/> : <ArrowDropDownIcon />}
          </StyledButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="center">{row.tipo}</StyledTableCell>
        <StyledTableCell align="center">{row.medicion}</StyledTableCell>
        <StyledTableCell align="center">{row.fecha}</StyledTableCell>
        <StyledTableCell align="center">{row.proximaFecha}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0, backgroundColor: 'black' }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: 'white', color: 'black' }}>
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Fecha</StyledTableCell>
                    <StyledTableCell>Medido por</StyledTableCell>
                    <StyledTableCell align="right">Medición</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <StyledTableCell component="th" scope="row">
                        {historyRow.date}
                      </StyledTableCell>
                      <StyledTableCell>{historyRow.customerId}</StyledTableCell>
                      <StyledTableCell align="right">{historyRow.amount}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Damian', 'Carton', 159, '01-05-2024', '01-06-2024'),
  createData('Alejandro', 'Generales', 237, '01-04-2024', '01-05-2024'),
  createData('Luis', 'Especiales', 262, '01-03-2024', '01-04-2024'),
  createData('Julio', 'Metales', 305, '01-02-2024', '01-03-2024'),
  createData('Christian', 'Liquidos Especiales', 356, '01-01-2024', '01-02-2024'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            <StyledTableCell />
            <StyledTableCell>Medido por</StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
            <StyledTableCell align="center" >Medición</StyledTableCell>
            <StyledTableCell align="center">Fecha</StyledTableCell>
            <StyledTableCell align="right">Próxima medición</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}