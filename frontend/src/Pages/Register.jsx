import React, { useState } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handleRegistration = async (e) => {
    e.preventDefault();
    const requestBody = {
      username,
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Success Regist", data)
        navigate("/login")
      } else {
        console.error("Error", data.message);
      }
    } catch (error) {
      console.error("An error occured", error);
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
        <form onSubmit={handleRegistration}>
          <Typography variant="h4">Sign Up</Typography>
          <TextField
            m={"2rem auto"}
            p={"2rem"}
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ color: "white", mt: 2 }}
          >
            Sign Up
          </Button>
          <Typography mt={2}>
            Already have an Account?
            <Link to="/login">Click Here</Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default Register;
