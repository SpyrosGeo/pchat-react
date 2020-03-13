import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

import './styles/Chat.css'
import InfoBar from './InfoBar';
import Input from './Input';
let socket;
export default function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "localhost:5000";

    useEffect(() => {
        //retrieve data from url
        const { name, room } = queryString.parse(location.search)
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        //emit events
        socket.emit('join', { name, room }, () => {

        })
        //handle disconnect
        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search])



    useEffect(() => {
        //listen for messages
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            console.log('MESSAGE')
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
             <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}
