import {
  Container,
  FormControl,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";
import { removeUserLogged, saveUserLogged } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { isLoading } from "../../store/slices/loading/loading";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const { onInputChange, formState } = useForm({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const { username, password } = formState;

  const handleLogin = async (username: string, password: string) => {
    dispatch(isLoading());
    if (!username || !password) {
      toast.error("Por favor completa todos los campos", {
        position: "top-right",
      });
      dispatch(isLoading());
      removeUserLogged();
      return;
    }

    const user = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => response.json());

    if (!user.username) {
      toast.error("Usuario o contraseña incorrecta", {
        position: "top-right",
      });
      dispatch(isLoading());
      removeUserLogged();
      return;
    }
    console.log(user); 
    saveUserLogged(user.access_token, user.username, user.role);
    dispatch(isLoading());
    navegate("/home");
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#8995cb",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="animate__fadeIn  animate__animated"
    >
      <FormControl
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          padding: "30px",
          width: "90%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333333",
          }}
        >
          Login
        </Typography>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          name="username"
          onChange={onInputChange}
          fullWidth
          sx={{
            marginBottom: "20px",
          }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          onChange={onInputChange}
          fullWidth
          sx={{
            marginBottom: "20px",
          }}
        />
        <Button
          variant="contained"
          onClick={() => handleLogin(username, password)}
          sx={{
            backgroundColor: "#1976d2",
            color: "#ffffff",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "10px",
            width: "100%",
            "&:hover": {
              backgroundColor: "#155a9c",
            },
          }}
        >
          Sign In
        </Button>
        {/* <Typography
          variant="body2"
          sx={{
            marginTop: "15px",
            color: "#666666",
            textAlign: "center",
          }}
        >
          Don't have an account?{" "}
          <a href="#" style={{ color: "#1976d2" }}>
            Sign up
          </a>
        </Typography> */}
      </FormControl>
      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          ISO14001
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "4px",
            textAlign: "center",
          }}
        >
          Sistema de Gestión
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Desarrollado por Angel D. Rodriguez
        </Typography>
      </Box>
    </Container>
  );
};
