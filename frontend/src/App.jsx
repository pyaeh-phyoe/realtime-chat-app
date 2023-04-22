import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Chat from "./pages/chat";
import socketIO from "socket.io-client"
import underConstruction from "./assets/work-in-progress.svg"


const socket = socketIO.connect("https://chat-app-2ifl.onrender.com")
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
