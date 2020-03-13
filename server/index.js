const express = require('express');
const socket = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000

//import router from router.js
const router = require('./router')

//socket.io server initialize
const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection',socket=>{
        console.log("We have a new connection")

        socket.on('join',({name,room})=>{
            console.log(name)
            console.log(room)
        })
    socket.on('disconnect',()=>{
        console.log("user has left")
    })


})


//use the router as middleware
app.use(router);

server.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})