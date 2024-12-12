const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

// Define the Message schema
const messageSchema = new mongoose.Schema({
  user: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

// Create the Message model
const Message = mongoose.model('Message', messageSchema);

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Serve static files (index.html, css, etc.)
app.use(express.static('public'));

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('New user connected');

  // Listen for messages from clients
  socket.on('chatMessage', async (messageData) => {
    // Save the message to MongoDB
    const newMessage = new Message({
      user: messageData.user,
      message: messageData.message,
    });

    await newMessage.save();  // Save the message to MongoDB

    // Emit the message to all connected clients
    io.emit('chatMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
