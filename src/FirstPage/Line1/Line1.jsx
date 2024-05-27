import "./Line1.css"
import info from '../../resource/info.png'
import {motion} from "framer-motion";
import React, {useEffect, useRef} from "react"
import Matrix from "./Matrix";

const tg = window.Telegram.WebApp;



// return <canvas className='fixes top-0 left-0 z-[-1]' ref={canvasRef}></canvas>


function Line1() {
    return (
        <div className={"Line1"}>
            {/*<Matrix />*/}
            <div className={"divImgInfo"}>
                <img className={"imgInfo"} src={info} alt="info"/>
            </div>
            <div className={"userName"}>
                {tg.initDataUnsafe?.user?.username}
            </div>
        </div>
    );
}

export default Line1;