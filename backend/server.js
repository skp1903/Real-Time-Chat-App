const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI
const dbURI = 'mongodb://localhost:27017/skp_chat';

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define Message Schema
const messageSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
});

// Message Model
const Message = mongoose.model('Message', messageSchema);

// API Endpoints
// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to SKP Chat!');
});

// Fetch Messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Save a New Message
app.post('/api/messages', async (req, res) => {
  console.log('Request Body:', req.body); // Debugging log
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: 'Username and message are required' });
  }

  try {
    const newMessage = new Message({ username, message });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Error saving message' });
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
