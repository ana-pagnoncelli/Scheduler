import React, { useContext, useEffect } from "react";
import { Typography, Button, Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export function Logout() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");

    setUser("", false);

    navigate("/");
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            Logging Out...
          </Typography>

          <Typography
            variant='body1'
            color='text.secondary'
            align='center'
            sx={{ mb: 3 }}
          >
            You are being logged out. If you are not redirected automatically,
            please click the button below.
          </Typography>

          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={handleLogout}
            sx={{ mt: 2 }}
          >
            Logout Now
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
