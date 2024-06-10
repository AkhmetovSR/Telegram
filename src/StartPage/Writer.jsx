import {Cursor, useTypewriter} from "react-simple-typewriter";
import React from "react";
import "./Writer.css"

const tg = window.Telegram.WebApp;
const userName = tg.initDataUnsafe?.user?.username;


function Writer (props) {
    const [text] = useTypewriter({
            words: ['Hello, ' + props.data.login + '!', 'How are you?', 'Click "StartMining"'],
            loop: 1,
            typeSpeed: 80,
            deleteSpeed: 40
        }
    );
    return (
        <div className={"Writer"}>
            <span className="HelloText">...\\{text}<Cursor cursorStyle="_"/></span>
        </div>
    )
}

export default Writer;