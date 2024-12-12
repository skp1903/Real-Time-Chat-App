// Function to load messages from the backend and display them
async function loadMessages() {
  const response = await fetch('http://localhost:3000/messages');
  const data = await response.json();
  
  const chatDiv = document.getElementById('chat');
  chatDiv.innerHTML = ''; // Clear the chat window

  data.messages.forEach((message) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${message.user}: ${message.message}`;
    chatDiv.appendChild(messageDiv);
  });
}

// Function to send a new message to the backend
async function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;

  if (!message) return; // Don't send if the input is empty

  const user = 'User';  // You can modify this to get a username

  const response = await fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      message,
    }),
  });

  const data = await response.json();

  if (data.message === 'Message saved') {
    messageInput.value = '';  // Clear input field
    loadMessages();  // Reload messages to display the new one
  }
}

// Load messages when the page loads
window.onload = () => {
  loadMessages();
};
