import { Container, Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { Add } from "@mui/icons-material";
import ProcessDefinitionCard from "../components/process-card";

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
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "5px",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#72b2cf96",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
                  <ProcessDefinitionCard
                    id={process.id}
                    process={process.name}
                    area={process.area}
                    description={process.description}
                  />
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
          backgroundColor: "#848484bc",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
                  <ProcessDefinitionCard
                    id={process.id}
                    process={process.name}
                    area={process.area}
                    description={process.description}
                  />
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
          backgroundColor: "#72b2cf96",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
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
                  <ProcessDefinitionCard
                    id={process.id}
                    process={process.name}
                    area={process.area}
                    description={process.description}
                  />
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
