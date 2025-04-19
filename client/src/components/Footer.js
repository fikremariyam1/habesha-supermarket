import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    { text: 'About Us', path: '/about' },
    { text: 'Products', path: '/products' },
    { text: 'Contact', path: '/contact' },
    { text: 'Privacy Policy', path: '/privacy' },
    { text: 'Terms of Service', path: '/terms' },
  ];

  const contactInfo = [
    { icon: <Phone />, text: '+251 911 234 567' },
    { icon: <Email />, text: 'info@ethiopianmarket.com' },
    { icon: <LocationOn />, text: 'Addis Ababa, Ethiopia' },
  ];

  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com' },
    { icon: <Twitter />, url: 'https://twitter.com' },
    { icon: <Instagram />, url: 'https://instagram.com' },
    { icon: <WhatsApp />, url: 'https://wa.me/251911234567' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
              }}
            >
              Ethiopian Market
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your one-stop shop for authentic Ethiopian products and groceries.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.text}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  {info.icon}
                  <Typography variant="body2">{info.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
              }}
            >
              Opening Hours
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Monday - Friday: 8:00 AM - 8:00 PM
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Saturday: 9:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body2">
              Sunday: 10:00 AM - 4:00 PM
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: 1,
            borderColor: 'primary.light',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Ethiopian Market. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 