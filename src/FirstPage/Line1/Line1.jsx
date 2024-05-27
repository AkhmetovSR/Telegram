import "./Line1.css"
import info from '../../resource/info.png'
import {motion} from "framer-motion";

const tg = window.Telegram.WebApp;

function Line1() {
    return (
        <div className={"Line1"}>
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