import React, { useEffect, useState, useRef } from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBar from '../components/ChatBar'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Chat = ({ socket }) => {
    const navigate = useNavigate()
    const userName = useSelector(state => state.user.userName)
    const [messages, setMessages] = useState([])
    const [typingStatus, setTypingStatus] = useState("")
    const lastMessageRef = useRef(null)

    useEffect(() => {
        if (!userName) {
            navigate('/')
        }
    }, [userName])

    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages, data]))
    }, [socket, messages])

    useEffect(() => {
        socket.on("typingResponse", data => setTypingStatus(data))
    }, [socket])

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col min-h-screen">
            <ChatHeader></ChatHeader>
            <div className='flex grow'>
                <ChatBar socket={socket} />
                <div className='flex flex-col grow-[4]'>
                    <ChatBody messages={messages} typingStatus={typingStatus} lastMessageRef={lastMessageRef} />
                    <ChatFooter socket={socket} />
                </div>
            </div>
        </div>
    )
}

export default Chat