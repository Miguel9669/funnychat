const express = require('express')
const http = require('http')
const io = require('socket.io')

const app = express()
const server = http.createServer(app)
const socket = io(server)


app.use(express.static('public'))
let connection = []
let names = []
socket.on('connection', (socket)=>{
    
    connection.push(socket)
    socket.on('message', (ola)=>{
        if(ola.includes('N:')){
            if(names.includes(ola.substr(2))){
                socket.send('N')
                console.log('emiti')
                
            }else{
                names.push(ola.substr(2))
                console.log(names)
            }
            
        }
    })
    
    
})



server.listen(8000, ()=>{
    console.log('server on')
})