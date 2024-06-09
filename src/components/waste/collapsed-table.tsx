import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface HistoryEntry {
  createdAt: string;
  createdBy: string;
  measurement: number;
  id: string;
}

interface Waste {
  id: string;
  medidoPor?: string;
  serie: number[];
  total: number;
  maximo: number;
  minimo: number;
  promedio: number;
  consumo: number;
  fechaMedicion: string;
  historial: HistoryEntry[];
}

interface DataEntry {
  name: string;
  createdBy: string | undefined;
  consumo: number;
  fechaMedicion: string;
  historial: HistoryEntry[];
}

function createData(name: string, waste: Waste): DataEntry {
  return {
    name,
    createdBy: waste.medidoPor,
    consumo: waste.consumo,
    fechaMedicion: waste.fechaMedicion,
    historial: waste.historial,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <b>{row.name}</b>
        </TableCell>
        <TableCell align="center">{row.createdBy}</TableCell>
        <TableCell align="center">{row.consumo}</TableCell>
        <TableCell align="center">{row.fechaMedicion}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">fecha</TableCell>
                    <TableCell align="center">Medido por</TableCell>
                    <TableCell align="center">Medicion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.historial.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.createdAt}
                      </TableCell>
                      <TableCell align="center">{historyRow.createdBy}</TableCell>
                      <TableCell align="center">{historyRow.measurement}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

interface CollapsibleTableProps {
  data: { [key: string]: Waste };
}

export default function CollapsibleTable({ data }: CollapsibleTableProps) {
  let rows: DataEntry[] = [];

  for (const wasteName of Object.keys(data)) {
    const waste = data[wasteName];
    rows.push(createData(wasteName, waste));
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tipo</TableCell>
            <TableCell align="center">Medido por</TableCell>
            <TableCell align="center">Medición</TableCell>
            <TableCell align="center">Fecha</TableCell>
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
