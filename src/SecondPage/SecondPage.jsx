import s from "./SecondPage.module.css"
import inviteBig from "../resource/inviteBig.png"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
const tg = window.Telegram.WebApp;

function SecondPage() {
    return (
        <div className={s.SecondPage}>
            <motion.div  animate={{ transform: "translateX(120px)" }} transition={{type: "spring", stiffness: 250}}>
                <img className={s.img} src={inviteBig} alt="invite"/>
            </motion.div>

        </div>
    );
}

export default SecondPage;