# Ethiopian Supermarket Website

A full-featured e-commerce website for an Ethiopian supermarket, featuring authentic Ethiopian products and groceries.

## Features

- User authentication and authorization
- Product catalog with Ethiopian-specific categories
- Shopping cart functionality
- Order management system
- Responsive design with Ethiopian-inspired styling
- Admin dashboard for product and order management

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer for file uploads

### Frontend
- React
- Material-UI
- Redux Toolkit
- React Router
- Formik & Yup for form validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ethiopian-supermarket.git
cd ethiopian-supermarket
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Create a `uploads` directory in the root folder for product images:
```bash
mkdir uploads
```

## Running the Application

1. Start the backend server:
```bash
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
ethiopian-supermarket/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/         # Page components
│       ├── redux/         # Redux store and slices
│       └── utils/         # Utility functions
├── models/                # MongoDB models
├── routes/               # API routes
├── uploads/              # Product images
└── server.js            # Backend entry point
```

## API Endpoints

### Authentication
- POST /api/users/register - Register new user
- POST /api/users/login - User login
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile

### Products
- GET /api/products - Get all products
- GET /api/products/ethiopian - Get Ethiopian products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create new product (admin only)
- PUT /api/products/:id - Update product (admin only)
- DELETE /api/products/:id - Delete product (admin only)

### Orders
- POST /api/orders - Create new order
- GET /api/orders/my-orders - Get user's orders
- GET /api/orders/:id - Get order by ID
- PUT /api/orders/:id/status - Update order status (admin only)
- PUT /api/orders/:id/cancel - Cancel order

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Ethiopian cultural elements and design inspiration
- Material-UI for the component library
- MongoDB for the database
- Express.js for the backend framework 