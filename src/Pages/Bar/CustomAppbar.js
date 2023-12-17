import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../Logo_TXT.png';

const CustomAppBar = () => {
  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('userid');

  return (
    <AppBar
      position="absolute"
      color="inherit"
      elevation={0}
      sx={{ position: 'relative' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo link */}
        <RouterLink to={isLoggedIn ? "/home_login" : "/"}>
          <img src={Logo} alt="Your Logo" style={{ maxWidth: '100px' }} />
        </RouterLink>

        {/* Conditional rendering based on login status */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {isLoggedIn ? (
            // Logged in user buttons
            <>
              <RouterLink to="/">
                <Button sx={{ color: 'black' }}>Logout</Button>
              </RouterLink>
              <RouterLink to="/myblog">
                <Button
                  variant="contained"
                  sx={{
                    padding: '0.3rem 1.5rem',
                    backgroundColor: '#D4AB39',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#D4AB39',
                    },
                  }}
                >
                  My blog
                </Button>
              </RouterLink>
            </>
          ) : (
            // Logged out user buttons
            <>
              <RouterLink to="/login">
                <Button sx={{ color: 'black' }}>LOGIN</Button>
              </RouterLink>
              <RouterLink to="/join">
                <Button
                  variant="contained"
                  sx={{
                    padding: '0.3rem 2rem',
                    backgroundColor: '#D4AB39',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#D4AB39',
                    },
                  }}
                >
                  JOIN
                </Button>
              </RouterLink>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
