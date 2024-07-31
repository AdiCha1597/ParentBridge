const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

// Add a simple route for testing
app.get('/', (req, res) => {
  res.send('Server is working');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoUri = 'mongodb+srv://adityachandras:Atlasaccess@parentbuddy.heered1.mongodb.net/?retryWrites=true&w=majority&appName=ParentBuddy';
console.log("Attempting to connect to MongoDB with URI:", mongoUri);

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });
