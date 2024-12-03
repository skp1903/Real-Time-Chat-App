Real-Time Chat Application with End-to-End Encryption
Project Overview

This Real-Time Chat Application is designed to facilitate secure communication between users, with a focus on ensuring privacy through end-to-end encryption. The app allows users to send messages in real-time, which are stored in MongoDB.
Features

    Real-Time Messaging: The application supports real-time chat functionality using WebSocket for communication between the server and the client.
    End-to-End Encryption: Messages are encrypted using OpenPGP.js to ensure secure communication between users.
    User Authentication: Users provide their name before sending messages, with all messages being saved and retrieved from MongoDB.
    MongoDB Integration: Messages are stored in a MongoDB database, ensuring data persistence.
    Interactive Front-End: Built using HTML, CSS, and JavaScript, the front end provides a simple and user-friendly chat interface.

Technologies Used

    Frontend: HTML, CSS, JavaScript
    Backend: Node.js, Express.js, WebSocket
    Database: MongoDB
    Encryption: OpenPGP.js
    Deployment: GitHub for version control, and hosted on GitHub Codespaces for seamless integration.

Installation Instructions

    Clone the repository:

git clone https://github.com/skp1903/Real-Time-Chat-App.git

Navigate to the project directory:

cd Real-Time-Chat-App

Install required dependencies:

    For the backend:

cd backend
npm install

For the frontend:

    cd frontend
    npm install

Run the server:

node server.js

Start the frontend:

    npm start

    Access the application: Open your browser and navigate to http://localhost:3000.

Usage

    Enter your name in the input field and send messages to your peers.
    Messages will be encrypted and stored in MongoDB, visible only to the intended recipients.

License

This project is open-source and available under the MIT License.
