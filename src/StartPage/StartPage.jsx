import "./StartPage.css"
import React, {useEffect, useRef} from "react"
import "../resource/mask.png"
import Writer from "./Writer.jsx";
import {NavLink} from "react-router-dom";

const tg = window.Telegram.WebApp;

function StartPage() {
    return (
        <div className="StartPage">
            <div className="Black">
                <Writer/>
                <NavLink to="/matrix"><button className="StartMining">Start Mining</button></NavLink>
            </div>

        </div>
    );
}

export default StartPage;