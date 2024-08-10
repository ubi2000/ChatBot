// 
// src/components/NavBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ username, setUsername }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(''); // Clear the username in state
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexDirection="column" alignItems="flex-start" flexGrow={1}>
          <Typography variant="h6" component="div">
            Chat Bot
          </Typography>
          {!username ? (
            <Box display="flex" mt={1}>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Typography variant="body1" component="div" mr={2}>
                {username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
