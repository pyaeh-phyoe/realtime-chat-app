import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Chat from "./pages/chat";
import socketIO from "socket.io-client"


const socket = socketIO.connect("http://localhost:4000")
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<Chat socket={socket} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;