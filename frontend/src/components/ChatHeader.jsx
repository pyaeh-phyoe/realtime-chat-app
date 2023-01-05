import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../features/userSlice'

const ChatHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLeaveChat = () => {
        dispatch(logout())
        navigate("/")
    }
    return (
        <div className="h-[4rem] flex justify-end border-b border-borderColor">
            <button className='mx-2.5' onClick={handleLeaveChat}>
                logout
            </button>
        </div>
    );
}

export default ChatHeader;