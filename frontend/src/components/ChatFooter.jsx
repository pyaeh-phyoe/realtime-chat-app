import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ChatFooter = ({ socket }) => {

  const [message, setMessage] = useState("")
  const userName = useSelector(state => state.user.userName)

  // const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`)
  const handleTyping = () => socket.emit("typing", `${userName} is typing ...`)

  const handleSendMessage = (e) => {
    e.preventDefault()
    // if (message.trim() && localStorage.getItem("userName")) {
      if (message.trim() && userName) {
      socket.emit("message",
        {
          text: message,
          name: userName,
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id
        }
      )
    }
    socket.emit("typing", ' ')
    setMessage("")
  }
  return (
    <div className='chat__footer px-2.5	py-3'>
      <form className='form' onSubmit={handleSendMessage}>
        <div className='bg-primaryColor px-2 py-3	flex grow rounded-2xl justify-between	'>
          <input
          className='bg-primaryColor w-full'
            type="text"
            placeholder='Aa'
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleTyping}
          />
          <button className="text-[#9ba3af]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

          </button>
        </div>

      </form>
    </div>
  )
}

export default ChatFooter