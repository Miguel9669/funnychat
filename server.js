const express = require('express')
const http = require('http')
const io = require('socket.io')

const app = express()
const server = http.createServer(app)
const socket = io(server)


app.use(express.static('public'))

socket.on('connection', (socket)=>{
    
    console.log('conectaram-se')
})

server.listen(8000, ()=>{
    console.log('server on')
})