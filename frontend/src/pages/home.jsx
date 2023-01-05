import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Home = ({ socket }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(userName))
        socket.emit("newUser", { userName, socketID: socket.id })
        navigate("/chat")
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <h2 className='text-[#0391f1] text-4xl text-center	'>Open Chat</h2>
                <div className='p-5'>
                    <input type="text"
                        minLength={6}
                        placeholder="username"
                        name="username"
                        id='username'
                        className='username__input border-b	border-[#000]'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <button className='text-[#9ba3af] p-5'>Enter</button>
            </form>
        </div>
    )
}

export default Home