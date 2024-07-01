import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PlanningLayout } from '../layouts/planning';
import { HomeLayout } from '../layouts/home';
import { Dispatch, SetStateAction } from 'react';
import { Dashboard } from '../pages/dashboard';

interface NavBarProps {
    setViewSelected: Dispatch<SetStateAction<React.ReactElement | null>>;
}


export const NavBar: React.FC<NavBarProps> = ({ setViewSelected }) => {
    const navigate = useNavigate();

    const renderContent = (option: string) => {

        switch (option) {
            case 'Home':
                setViewSelected(<HomeLayout />)
                break

            case 'Planning':
                setViewSelected(<PlanningLayout />)
                break

            case 'Dashboard':
                setViewSelected(<Dashboard/>)
                break
            default:
                navigate('/')

        };
    };


    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: '100%' },
                height: `65px`
            }}
        >
            <Toolbar>

                <IconButton
                    color='inherit'
                    edge="start"

                    sx={{ mr: 2, display: { sm: 'none' } }}
                >

                    <MenuOutlined />

                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                    <Typography variant='h6' noWrap component='div'> Sistema de Gestión Ambiental </Typography>

                    <Grid item>
                        <img src="../public/img/Nuevo-BOS2.png" alt="Logo" width={150} />
                    </Grid>

                    <Grid item>

                        <Button color="inherit" onClick={() => renderContent('Home')}>Home</Button>
                        <Button color="inherit" onClick={() => renderContent('Planning')}>Planificación</Button>
                        <Button color="inherit">PG</Button>
                        <Button color="inherit">IT</Button>
                        <Button color="inherit" onClick={() => renderContent('Dashboard')}>DASHBOARD</Button>

                        <IconButton>
                            <LogoutOutlined />
                        </IconButton>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};