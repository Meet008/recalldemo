import React from "react";
import { Container, TextField, Button } from "@mui/material";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "admin" && password === "admin") {
      window.location.href = "/home";
    } else {
      window.location.href = "/";
    }
  };
  return (
    <Container maxWidth="sm">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            fullWidth
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
