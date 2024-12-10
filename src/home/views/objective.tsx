import { Edit } from '@mui/icons-material';
import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setEditForms } from '../../store/slices/edit-forms/edit-slice';
import { getPoliticsThunks } from '../../store/slices/politics/thunks';
import { AppDispatch } from '../../store/store';


export const Objective = () => {

    const  {targets}  = useSelector((state: any) => state.politics)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getPoliticsThunks());

    }, [dispatch])

    return (
        <>
            <Grid container
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.853)",
                    borderRadius: "10px",
                    width: "75%",
                }}>

                <Grid item
                    xs={12}
                    sm={8}
                    md={8}>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: 60,
                            textAlign: 'center',
                            '&:hover .editButton': {
                                opacity: 1,
                            },
                            '&:hover': {
                                cursor: 'pointer',
                            }
                        }}
                    >
                        Objetivos
                        <Button
                            onClick={() => dispatch(setEditForms({ from: "targets" }))}
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}
                        >
                            <Edit />
                        </Button>
                    </Typography>


                    <List>
                        {targets && targets.map((text:any, index:number) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <ArrowRightIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    );
};
