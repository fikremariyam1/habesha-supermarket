import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import {
  LocalGroceryStore,
  Coffee,
  Restaurant,
  ShoppingCart,
} from '@mui/icons-material';

const Home = () => {
  const theme = useTheme();

  const featuredCategories = [
    {
      title: 'Ethiopian Coffee',
      description: 'Premium Ethiopian coffee beans and ground coffee',
      icon: <Coffee sx={{ fontSize: 40 }} />,
      path: '/products?category=coffee',
    },
    {
      title: 'Spices',
      description: 'Authentic Ethiopian spices and seasonings',
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      path: '/products?category=spices',
    },
    {
      title: 'Grains',
      description: 'High-quality Ethiopian grains and cereals',
      icon: <LocalGroceryStore sx={{ fontSize: 40 }} />,
      path: '/products?category=grains',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe Coffee',
      price: 15.99,
      image: '/images/yirgacheffe.jpg',
      category: 'Coffee',
    },
    {
      id: 2,
      name: 'Berbere Spice Mix',
      price: 8.99,
      image: '/images/berbere.jpg',
      category: 'Spices',
    },
    {
      id: 3,
      name: 'Teff Flour',
      price: 12.99,
      image: '/images/teff.jpg',
      category: 'Grains',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                }}
              >
                Welcome to Ethiopian Market
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Your source for authentic Ethiopian products and groceries
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/products"
                startIcon={<ShoppingCart />}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add hero image here */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Categories */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
          }}
        >
          Featured Categories
        </Typography>
        <Grid container spacing={4}>
          {featuredCategories.map((category) => (
            <Grid item xs={12} md={4} key={category.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  bgcolor: 'primary.light',
                  color: 'white',
                }}
              >
                <Box sx={{ mb: 2 }}>{category.icon}</Box>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      mb: 2,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {category.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={category.path}
                    variant="contained"
                    color="secondary"
                  >
                    View Products
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
            }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 1,
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.category}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<ShoppingCart />}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 