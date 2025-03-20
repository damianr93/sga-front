import { Edit } from '@mui/icons-material';
import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setEditForms } from '../../store/slices/edit-forms/edit-slice';
import { getPoliticsThunks } from '../../store/slices/politics/thunks';
import { AppDispatch } from '../../store/store';
import { getUserLogged } from '../../utils/storage';


export const Objective = () => {

    const { targets } = useSelector((state: any) => state.politics)
    const item = getUserLogged();
    if (!item) {
        return null;
    }
    const { role } = JSON.parse(item);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPoliticsThunks());

    }, [dispatch])

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.853)",
                    borderRadius: "10px",
                    width: "75%",
                    padding: "16px",
                    boxShadow: 3,
                    gap: "16px",
                    position: "relative",
                }}
            >
                <Grid item xs={12} sm={8} md={8}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                            textAlign: 'center',
                            color: "#6e2864",
                            fontWeight: "bold",
                            position: "relative",
                            '&:hover .editButton': {
                                opacity: 1,
                            },
                            '&:hover': {
                                cursor: 'pointer',
                            }
                        }}
                    >
                        Objetivos
                        {role === "admin" && (
                            <Button
                                onClick={() => dispatch(setEditForms({ from: "politics" }))}
                                className="editButton"
                                sx={{
                                    opacity: 0.2,
                                    transition: "opacity 0.3s",
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Edit />
                            </Button>
                        )}
                    </Typography>

                    <List sx={{ marginTop: "16px" }}>
                        {targets && targets.map((text: any, index: number) => (
                            <ListItem key={index} sx={{ borderBottom: "1px solid #e0e0e0", padding: "8px 0" }}>
                                <ListItemIcon>
                                    <ArrowRightIcon fontSize="small" sx={{ color: "#2196f3" }} />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ color: "#555" }} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    );
};
