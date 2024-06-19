import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';


export const NavBar = ({ drawerWidth = 0 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
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
                        <img src="../public/img/Nuevo-BOS2.png" alt="Logo" width={150}/>
                    </Grid>

                    <Grid item>

                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Planificación</Button>
                    <Button color="inherit">PG</Button>
                    <Button color="inherit">IT</Button>

                    <IconButton>
                        <LogoutOutlined />
                    </IconButton>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}