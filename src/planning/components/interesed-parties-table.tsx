import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deletInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { AppDispatch } from "../../store/store";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";

type interestedParties = {
  id:string,
  intExt:string,
  legalRequirement:boolean,
  name:string,
  requirement:string
}

export default function PartiesBasicTable({rows}:{rows:interestedParties[]}) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <TableContainer sx={{ width: 900 }} component={Paper}>
      <Table sx={{ minWidth: 650, width: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Parte interesada</TableCell>
            <TableCell align="center">
              Requisito de la parte interesada
            </TableCell>
            <TableCell align="center">Req. Legal</TableCell>
            <TableCell align="center">Origen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.requirement}</TableCell>
              <TableCell align="left">{row.legalRequirement ? "Si" : "No"}</TableCell>
              <TableCell align="left">{row.intExt}</TableCell>
              <TableCell align="left">
                <Button
                onClick={() => dispatch(setEditForms({from: 'interested-parties', id: row.id}))}
                  className="editButton"
                  sx={{
                    opacity: 0.2,
                    transition: "opacity 0.3s",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Edit />
                </Button>
                <Button
                onClick={() => dispatch(deletInterestedPartiesThunks(row.id))}
                  sx={{
                    opacity: 0.2,
                    transition: "opacity 0.3s",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Delete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
