const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'static')));

const botName = 'Chatta-Bot';

io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        // User joins
        socket.emit('message', formatMessage(botName, 'Welcome to ChatCord'));
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat!`));

        //Send info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Get chatMessage
    socket.on('chatMessage', msg=> {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    // User leaves
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if(user) {
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
            //Send info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log('Server running on port 3000'));

