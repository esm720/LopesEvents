import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import RunningLope from '../assets/static/RunningLope_BLACK.png'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: 'px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Link to={'/'}>
        <img src={RunningLope} alt="" width={50} height={40}/>
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 5 }}>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/'}>
                <Button variant="text" color="secondary" size="small">
                  Home
                </Button>
            </Link>
            </Box>
          </Box>
          
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {/*
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            */}
            
            <Link to={'/Application'}>
              <Button color="secondary" variant="contained" size="small">
               Login
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                {/*
                <Link to={'/'}>
                <MenuItem>Home</MenuItem>
                </Link>
                 */}
                <MenuItem>
                  <Button color='secondary' href='#Scenarios'>FAQ</Button>
                </MenuItem>
                <MenuItem>
                  <Link to={'/Application'}>
                  <Button color="secondary" variant="outlined" fullWidth>
                    Login
                  </Button>
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}