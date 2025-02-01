import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navegate = useNavigate();
  const {username} = JSON.parse(localStorage.getItem('authToken') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navegate('/login');
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "100%" },
        height: `65px`,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {" "}
            Sistema de Gestión Ambiental{" "}
          </Typography>

          <Grid item>
            <h1>Hola, {username}</h1>
          </Grid>

          <Grid item>
            <Button color="inherit" onClick={() => {navegate('/home')}}>Home</Button>
            <Button color="inherit" onClick={() => {navegate('/planning')}}>Planificación</Button>
            <Button color="inherit">PG</Button>
            <Button color="inherit">IT</Button>
            <Button color="inherit" onClick={() => {navegate('/dashboard')}}>DASHBOARD</Button>

            <IconButton
            onClick={handleLogout}
            >
              <LogoutOutlined 
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
