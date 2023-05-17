import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert, Typography, Button } from "@mui/material";

function Dashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const username = userData?.username;

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome, {username}!
      </Typography>
      <Container>
        <Alert severity="success">
          You have successfully logged into your account!
        </Alert>
        <Button variant="contained" href="/logout">
          Logout
        </Button>
      </Container>
    </div>
  );
}

export default Dashboard;
