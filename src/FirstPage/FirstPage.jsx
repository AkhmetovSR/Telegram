import Line1 from "./Line1/Line1.jsx";
import Line2 from "./Line2/Line2.jsx";
import s from "./FirstPage.module.css"
import mix from "../resource/circle1.png";
import {motion} from "framer-motion";

const tg = window.Telegram.WebApp;

function FirstPage() {
    return (
        <div className={s.FirstPage}>
            <Line1/>
            <Line2/>
            <motion.div
                className={s.ImgDiv}
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 0.8}}
                transition={{
                    duration: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}
                }}>
                <img className={s.Img} src={mix} alt="mix"/>
            </motion.div>
        </div>
    );
}

export default FirstPage;