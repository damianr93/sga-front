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
import { getUserLogged } from "../../utils/storage";

type interestedParties = {
  id: string;
  intExt: string;
  legalRequirement: boolean;
  name: string;
  requirement: string;
};

export default function PartiesBasicTable({
  rows,
}: {
  rows: interestedParties[];
}) {
  const dispatch = useDispatch<AppDispatch>();
  const items = getUserLogged();
  if (!items) {
    return null;
  }
  const {role} = JSON.parse(items);

  return (
    <TableContainer sx={{ width: '100%' }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Parte interesada</TableCell>
            <TableCell align="center">
              Requisito de la parte interesada
            </TableCell>
            <TableCell align="center">Req. Legal</TableCell>
            <TableCell align="center">Origen</TableCell>
            {
              role === "admin" &&
              <TableCell align="center">Acciones</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.requirement}</TableCell>
                <TableCell align="center">
                  {row.legalRequirement ? "Si" : "No"}
                </TableCell>
                <TableCell align="center">{row.intExt}</TableCell>
                <TableCell align="center">
                  {role === "admin" && (
                    <Button
                      onClick={() =>
                        dispatch(deletInterestedPartiesThunks(row.id))
                      }
                      color="error"
                      variant="contained"
                      sx={{ marginRight: 2 }}
                    >
                      <Delete/>
                    </Button>
                  )}
                  {role === "admin" && (
                    <Button
                      onClick={() =>
                        dispatch(
                          setEditForms({
                            from: "interested-parties",
                            id: row.id,
                          })
                        )
                      }
                      color="primary"
                      variant="contained"
                    >
                      <Edit />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
