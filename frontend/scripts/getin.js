var chat = document.getElementById('form')
var body = document.getElementById('body')
var chat1 = document.getElementById('chat')

function clicar(){
    chat.style.display = 'none'
    setTimeout(function(){chat1.style.opacity = 1},1000)
    
    setTimeout(function(){body.style.backgroundColor = 'rgb(65, 65, 65)'}, 100)
    ws = new WebSocket('ws://localhost:8080')
    

    ws.onopen= function(){
        console.log('entrei')
    }
    
    
    
        
    
    
    
}



