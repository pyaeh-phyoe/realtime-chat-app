import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate()
  const userName = useSelector(state => state.user.userName)
 
  return (
    <>
      <div className='message__container p-3 grow'>
        {messages.map(message => (
          message.name === userName ? (
            <div className="message__chats" key={message.id}>
              <div className='flex flex-col items-start'>
                <p className='text-[#9ba3af] text-sm'>You</p>
                <div className='message__sender'>
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <div className='flex flex-col items-end'>
                <p className='text-[#9ba3af] text-sm'>{message.name}</p>
                <div className='message__recipient'>
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          )
        ))}
        <div ref={lastMessageRef} />
      </div>

      <div className='text-[#9ba3af] text-sm px-3'>
        <p>{typingStatus}</p>
      </div>
    </>
  )
}

export default ChatBody