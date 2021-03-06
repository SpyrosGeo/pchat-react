import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './styles/Join.css'
import logo from './Images/angrybird.png'
export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                

                    <img className="imageContainer" src={logo}alt="logo"/>
               
                <h1 className="heading">Join pouChat</h1>
                <div><input placeholder="Username"
                    className="joinInput mt-20"
                    type="text"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div><input placeholder="Room"
                    className="joinInput"
                    type="text"
                    onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                    <button type="submit" className="button mt-20">
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    )
}
