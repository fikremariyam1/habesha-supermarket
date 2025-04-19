import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { fetchProductById } from '../redux/slices/productSlice';
import { addItem } from '../redux/slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addItem({ ...selectedProduct, quantity }));
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!selectedProduct) return <Typography>Product not found</Typography>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={selectedProduct.image}
              alt={selectedProduct.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {selectedProduct.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                ${selectedProduct.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedProduct.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Category: {selectedProduct.category}
              </Typography>
              {selectedProduct.isEthiopian && (
                <Typography variant="body2" color="primary" paragraph>
                  Ethiopian Product
                </Typography>
              )}
              <Box sx={{ mt: 3 }}>
                <TextField
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  inputProps={{ min: 1 }}
                  sx={{ mr: 2, width: '100px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                  sx={{ mt: 1 }}
                >
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 