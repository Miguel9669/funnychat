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
                console.log(names)
                
            }else{
                socket.send('S')
                names.push(ola.substr(2))
                
                connection.forEach(s => s.send('s:'+ ola.substr(2)+' Join The party'))
                console.log(names)
            }
            
        }
        if(ola.includes('M:')){
            let person = connection.indexOf(socket)
            connection.forEach(s => s.send('M:'+ names[person]+': '+ ola.substr(2)))
        }
    })
    socket.on('disconnect', function () {
        console.log('xau')
        let person1 = connection.indexOf(socket)
        connection.forEach(s => s.send('s:'+ names[person1]+' Left The party'))
        setTimeout(()=>{
            connection.splice(person1, 1);
            names.splice(person1,1)
            console.log(names)
        }, 1000)
        
        
    })
    
    
})



server.listen(8000, ()=>{
    console.log('server on')
})