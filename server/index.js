const express = require('express');
const socket = require('socket.io');
const http = require('http');

//import helper fuctions
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

const PORT = process.env.PORT || 5000

//import router from router.js
const router = require('./router')

//socket.io server initialize
const app = express();
const server = http.createServer(app);
const io = socket(server);

//use the router as middleware
app.use(router);
io.on('connection', socket => {
    socket.on('join', ({ name, room }, callback) => {
        const { err, user } = addUser({ id: socket.id, name, room });

        if (err) {
            return callback(err)
        }
        //emit message from back-end as admin
        socket.emit('message', { user: 'admin', text: `${user.name},Welcome to the ${user.room} room` })
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined.` })
        socket.join(user.room);

        callback();

    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message })
        
        callback();
    })

    socket.on('disconnect', () => {
        console.log("user has left")
    })


})



server.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`)
})