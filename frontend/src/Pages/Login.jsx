import React, { useState } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestBody = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if(response.ok){
        localStorage.setItem("token",data.token)
        navigate("/")
      }
      else{
        console.error("Login error",data.message)
      }

    } catch (error) {
      console.error("Please try again",error)
    }
  };
  return (
    <>
      <Box
        width="70%"
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={5}
        sx={{ boxShadow: 5 }}
      >
        <form onSubmit={handleLogin}>
          <Typography variant="h4">Sign In</Typography>

          <TextField
            m={"2rem auto"}
            p={"2rem"}
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <TextField
            m={"2rem auto"}
            p={"2rem"}
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Login
          </Button>
          <Typography mt={2}>
            New User?
            <Link to="/register">Register Here</Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default Login;
