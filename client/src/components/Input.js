import React from 'react'
import "./styles/Input.css"
export default function Input({message,setMessage,sendMessage}) {

    const handleClick=(e)=>{
        sendMessage(e)
    }
    return (
        <form className="form">
            <input
             className="input"
             type="text"
             placeholder="Type a message.."
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
                <button className="sendButton" onClick={e=>handleClick(e)}>Send</button>
        </form >
    )
}
