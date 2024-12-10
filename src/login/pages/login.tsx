import {
  Container,
  FormControl,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

export const Login = () => {
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
          fullWidth
          sx={{
            marginBottom: "20px",
          }}
        />
        <Button
          variant="contained"
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
        <Typography
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
        </Typography>
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
