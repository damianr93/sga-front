import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export const NavBar = ({ drawerWidth = 0 }) => {
    const navigate = useNavigate();

    const renderContent = (option: string) => {

        switch (option) {
            case 'Dashboard':
                navigate('/dashboard')
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
                height: `${drawerWidth}px`
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

                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Planificación</Button>
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