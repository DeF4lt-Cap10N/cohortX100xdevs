import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket, setSocket] = useState();
  const inputRef = useRef(null);

  function sendMessage(){
    if(!socket)return;
    //@ts-ignore
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);

  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    // @ts-ignore
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    }
  }, [])

  return (
    <>
      <input ref= {inputRef} type="text" placeholder='Enter message' />
      <button onClick={sendMessage}>click hard</button>
        
    </>
  )
}

export default App
