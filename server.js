const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'static')));

const botName = 'Chatta bot';

io.on('connection', socket => {
     // User joins
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord'));
    socket.broadcast.emit('message', formatMessage(botName, 'A user has joined the chat'));
    // User leaves
    socket.on('disconnect', () => {
        io.emit('message', formatMessage(botName, 'A user has left the chat'));
    });
    // Get chatMessage
    socket.on('chatMessage', msg=> {
        io.emit('message', formatMessage('USER', msg));
    });

});

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

