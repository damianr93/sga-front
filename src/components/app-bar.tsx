import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { getUserLogged } from "../utils/storage";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ruta actual
  const items = getUserLogged();

  if (!items) {
    return null;
  }

  const { username } = JSON.parse(items);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  
  const isActive = (path:String) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      sx={{
        minWidth: "1200px",
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

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">
            Sistema de Gestión Ambiental
          </Typography>

          <Grid item>
            <h1>Hola, {username}</h1>
          </Grid>

          <Grid item>
            <Button
              color={isActive("/home") ? "secondary" : "inherit"}
              onClick={() => navigate("/home")}
            >
              Home
            </Button>
            <Button
              color={isActive("/planning") ? "secondary" : "inherit"}
              onClick={() => navigate("/planning")}
            >
              Planificación
            </Button>
            <Button color="inherit">PG</Button>
            <Button color="inherit">IT</Button>
            <Button
              color={isActive("/dashboard") ? "secondary" : "inherit"}
              onClick={() => navigate("/dashboard")}
            >
              DASHBOARD
            </Button>

            <IconButton onClick={handleLogout}>
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
