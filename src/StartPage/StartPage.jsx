import s from "./StartPage.module.css"
import React, {useEffect, useRef} from "react"
import "../resource/mask.png"
import Writer from "./Writer.jsx";
import {NavLink} from "react-router-dom";
import o from "../GamePage/Options/Options.module.css"

const tg = window.Telegram.WebApp;

// tg.getPaymentForm.
// function closeOption(){
//     alert(window.location.this)
// }

function go() {
    const myHeaders = new Headers();
    myHeaders.append("user", 'tg.initDataUnsafe?.user?.username');

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        // redirect: "follow"
    };

    fetch("https://localhost:8080/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

function StartPage() {
    return (
        <div className={s.StartPage}>
            {/*<div className="Black">*/}
            {/*    <Writer/>*/}
            {/*    <NavLink to="/app1/GamePage"><button className="StartMining" onClick={go}>Start Mining</button></NavLink>*/}
            {/*</div>*/}
            <button className={s.btn} onClick={go}>Post</button>
        </div>
    );
}

export default StartPage;