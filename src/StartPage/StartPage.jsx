import s from "./StartPage.module.css"
import "../resource/mask.png"
import Writer from "./Writer.jsx";
import {NavLink} from "react-router-dom";

const tg = window.Telegram.WebApp;
let login = tg.initDataUnsafe?.user?.username;

function StartPage() {




    return (
        <div className={s.StartPage}>
            <div className={s.Black}>
                <Writer />
                <NavLink to='/app1/GamePage'>
                    <button className={s.StartMining}>Start Mining</button>
                </NavLink>
            </div>

        </div>
    );
}

export default StartPage;