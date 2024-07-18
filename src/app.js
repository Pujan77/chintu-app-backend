const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bowelRecordRoutes = require('./routes/bowelRecordRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS


// Routes
app.use('/api', bowelRecordRoutes);

// MongoDB connection
const mongoDBUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
