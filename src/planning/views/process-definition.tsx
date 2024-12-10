import { Box, Button, Container, Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import {
  deleteProcessDefinitionThunks,
  getProcessDefinitionThunks,
} from "../../store/slices/process-definition/thunks";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { Add, Delete, Edit } from "@mui/icons-material";

export const ProcessDefinition = () => {
  const { processDefinitions } = useSelector(
    (state: RootState) => state.processDefinitions
  );
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProcessDefinitionThunks());
  }, [dispatch]);

  return (
    <Container
      sx={{
        backgroundColor: "#ffffff61",
        padding: "10px",
        minHeight: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "5px",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#72cf7297",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Procesos Estratégicos</h3>
        <Container
          sx={{
            display: "flex",
          }}
        >
          {processDefinitions &&
            processDefinitions.map((process) => {
              if (process.type === "Estrategicos") {
                return (
                  <Box
                    sx={{
                      maxWidth: "200px",
                      backgroundColor: "#000000ca",
                      margin: "2px",
                      padding: "5px",
                      color: "white",
                      borderRadius: "3px",
                    }}
                  >
                    <h4>{process.name}</h4>
                    <p>Area: {process.area}</p>
                    <p>{process.description}</p>
                    <Button
                      onClick={() =>
                        dispatch(
                          setEditForms({
                            from: "process-definitions",
                            id: process.id,
                          })
                        )
                      }
                      className="editButton"
                      sx={{
                        opacity: 0.2,
                        transition: "opacity 0.3s",
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(deleteProcessDefinitionThunks(process.id))
                      }
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
                  </Box>
                );
              }
            })}
        </Container>
      </Container>
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <ArrowDownwardIcon fontSize="large" />
      </Container>
      <Container
        sx={{
          backgroundColor: "#729dcf96",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Procesos Operativos</h3>
        <Container
          sx={{
            display: "flex",
          }}
        >
          {processDefinitions &&
            processDefinitions.map((process) => {
              if (process.type === "Operativo") {
                return (
                  <Box
                    sx={{
                      maxWidth: "200px",
                      backgroundColor: "#000000ca",
                      margin: "2px",
                      padding: "5px",
                      color: "white",
                      borderRadius: "3px",
                    }}
                  >
                    <h4>{process.name}</h4>
                    <p>Area: {process.area}</p>
                    <p>{process.description}</p>
                    <Button
                      onClick={() =>
                        dispatch(
                          setEditForms({
                            from: "process-definitions",
                            id: process.id,
                          })
                        )
                      }
                      className="editButton"
                      sx={{
                        opacity: 0.2,
                        transition: "opacity 0.3s",
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(deleteProcessDefinitionThunks(process.id))
                      }
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
                  </Box>
                  
                );
              }
            })}
        </Container>
      </Container>
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <ArrowUpwardIcon fontSize="large" />
      </Container>
      <Container
        sx={{
          backgroundColor: "#72cf7297",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Procesos de Soporte</h3>
        <Container
          sx={{
            display: "flex",
          }}
        >
          {processDefinitions &&
            processDefinitions.map((process) => {
              if (process.type === "Soporte") {
                return (
                  <Box
                    sx={{
                      maxWidth: "200px",
                      backgroundColor: "#000000ca",
                      margin: "2px",
                      padding: "5px",
                      color: "white",
                      borderRadius: "3px",
                    }}
                  >
                    <h4>{process.name}</h4>
                    <p>Area: {process.area}</p>
                    <p>{process.description}</p>
                    <Button
                      onClick={() =>
                        dispatch(
                          setEditForms({
                            from: "process-definitions",
                            id: process.id,
                          })
                        )
                      }
                      className="editButton"
                      sx={{
                        opacity: 0.2,
                        transition: "opacity 0.3s",
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(deleteProcessDefinitionThunks(process.id))
                      }
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
                  </Box>
                );
              }
            })}
        </Container>
      </Container>
      <Fab
        onClick={() => dispatch(setEditForms({ from: "process-definitions" }))}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <Add />
      </Fab>
    </Container>
  );
};
