import React, { useState, useEffect } from 'react'

const ChatBar = ({ socket }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    return (
        <div className='grow border-r border-borderColor'>
            <div>
                <h2 className='text-xl font-bold p-2 mb-3'>ACTIVE USERS</h2>
                <div className='chat__users'>
                    {users.filter(user => user.socketID !== socket.id).map(user => {
                        return (
                            <div key={user.socketID} className='flex items-center p-2'>
                                <div className='w-14 h-14 border  border-[#eff2f5] rounded-full	 bg-[#eff2f5] text-2xl mr-3 flex items-center justify-center'>
                                    <span>{user.userName.charAt(0)}</span>
                                </div><p>{user.userName}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatBar