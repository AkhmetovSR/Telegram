import "./StartPage.css"
import React, {useEffect, useRef} from "react"
import "../resource/mask.png"
import Writer from "./Writer.jsx";
import {NavLink} from "react-router-dom";
import o from "../GamePage/Options/Options.module.css"

const tg = window.Telegram.WebApp;


function closeOption(){
    alert(window.location.this)
}

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