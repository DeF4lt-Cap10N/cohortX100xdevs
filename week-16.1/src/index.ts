import { WebSocketServer } from "ws";

const ws = new WebSocketServer({port: 8080})

ws.on("connection", function(socket){
   console.log("successful");

    socket.on("message", (e)=> {
      if(e.toString()==="Ping"){
         socket.send("Pong");
      }
    })
})
