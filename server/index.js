const express = require('express');
const socket = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000
//socket.io server initialize
const app = express();
const server = http.createServer(app);
const io = socket(server);


server.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})