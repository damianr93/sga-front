import { Button, Grid, ListItem, ListItemText, Paper, Typography, Fab } from "@mui/material"
import { Add, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { getContextAnalysisThunks } from "../store/slices/foda/thunks";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";

interface Analysis {
    id: string;
    type: string;
    description: string;
}

export const ContextAnalysis = () => {

    const analysis: Analysis[] = useSelector((state: any) => state.analysisContext.analysis)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getContextAnalysisThunks());
    }, [dispatch])

    return (
        <Grid container spacing={1}>
            <Fab
                onClick={() => dispatch(setEditForms({ from: 'foda-add' }))}
                color="primary"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <Add />
            </Fab>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>
                    <Typography variant="h6">
                        Fortalezas
                    </Typography>
                    {
                        analysis && analysis.filter((elem) => elem.type === "Fortaleza").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    onClick={() => dispatch(setEditForms({ from: 'foda-edit' }))}
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
                                <Grid container>
                                    <ListItemText primary={item.description} />
                                </Grid>
                            </ListItem>
                        )
                    }
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>
                    <Typography variant="h6">
                        Debilidades
                    </Typography>
                    {
                        analysis && analysis.filter((elem) => elem.type === "Debilidad").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    onClick={() => dispatch(setEditForms({ from: 'foda-edit' }))}
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
                                <Grid container>
                                    <ListItemText primary={item.description} />
                                </Grid>
                            </ListItem>
                        )
                    }
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>
                    <Typography variant="h6">
                        Oportunidades
                    </Typography>
                    {
                        analysis && analysis.filter((elem) => elem.type === "Oportunidad").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    onClick={() => dispatch(setEditForms({ from: 'foda-edit' }))}
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
                                <Grid container>
                                    <ListItemText primary={item.description} />
                                </Grid>
                            </ListItem>
                        )
                    }
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>
                    <Typography variant="h6">
                        Amenazas
                    </Typography>
                    {
                        analysis && analysis.filter((elem) => elem.type === "Amenaza").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    onClick={() => dispatch(setEditForms({ from: 'foda-edit' }))}
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
                                <Grid container>
                                    <ListItemText primary={item.description} />
                                </Grid>
                            </ListItem>
                        )
                    }
                </Paper>
            </Grid>
        </Grid>
    )
}
