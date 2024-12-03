import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = { username, message };
    
    // Send message to the server
    try {
      const response = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });
      const data = await response.json();
      setMessages([...messages, data]);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to SKP Chat!</h1>
      <form id="chatForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>

      <div id="chatMessages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
