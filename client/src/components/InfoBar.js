import React from 'react'
import "./styles/InfoBar.css"
import closeIcon from '../Icons/closeIcon.png';
import onlineIcon from '../Icons/onlineIcon.png';
import queryString from 'query-string';


export default function InfoBar({ room }) {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" alt="online" src={onlineIcon} />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    )
}
