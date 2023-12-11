const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Create an Express app
const app = express();

// Set up middleware and routes as needed

// Define MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://suhagiyadivyesh:DIvyesh%40Mongodb@cluster0.w6fsp.mongodb.net/employee_System?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Start your Express server after successfully connecting to MongoDB
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Define your mongoose schema and models, and set up routes and middleware as needed

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});