import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles/Join.css'

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join Pchat</h1>
                <div><input placeholder=""
                    className="joinInput mt-20"
                    type="text"
                    onChange={(e)=>setName(e.target.value)} />
                </div>
                <div><input placeholder=""
                    className="joinInput"
                    type="text"
                    onChange={(e)=>setRoom(e.target.value)} />
                </div>
                <Link onClick={e=>(!name || !room)?e.preventDefault():null} to={`/chat?name=${name}&room=${room}`} >
                    <button type="submit" className="button mt-20">
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    )
}
