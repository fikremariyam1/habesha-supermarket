import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Badge,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  ShoppingCart,
  Menu as MenuIcon,
  AccountCircle,
  LocalGroceryStore,
} from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isUserMenuOpen = Boolean(userMenuAnchor);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'Ethiopian Specials', path: '/products?category=ethiopian' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const userMenuItems = [
    { text: 'Profile', path: '/profile' },
    { text: 'Orders', path: '/orders' },
    { text: 'Logout', path: '/logout' },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          <LocalGroceryStore sx={{ mr: 1 }} />
          Ethiopian Market
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={RouterLink}
              to={item.path}
              sx={{
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            color="inherit"
            component={RouterLink}
            to="/cart"
            sx={{ position: 'relative' }}
          >
            <Badge badgeContent={0} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            onClick={handleUserMenuOpen}
            sx={{ p: 0 }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              <AccountCircle />
            </Avatar>
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{
            '& .MuiPaper-root': {
              bgcolor: 'primary.light',
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.text}
              component={RouterLink}
              to={item.path}
              onClick={handleMenuClose}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={userMenuAnchor}
          open={isUserMenuOpen}
          onClose={handleUserMenuClose}
          sx={{
            '& .MuiPaper-root': {
              bgcolor: 'primary.light',
            },
          }}
        >
          {userMenuItems.map((item) => (
            <MenuItem
              key={item.text}
              component={RouterLink}
              to={item.path}
              onClick={handleUserMenuClose}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 