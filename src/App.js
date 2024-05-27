// import logo from './logo.svg';
import './App.css'
import mix from "./resource/circle1.png"
import Options from "./Options/Options.jsx";
import Line1 from "./Line1/Line1.jsx";
import Line2 from "./Line2/Line2.jsx";
import {motion} from "framer-motion";

window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
const tg = window.Telegram.WebApp;

function closeApp() {
    tg.close();
}

function App() {
    return (
        <div className={"Main"}>
            <Line1/>
            <Line2/>
            <motion.div
                className={"ImgDiv"}
                initial={{opacity: 0, scale: 0.7}}
                animate={{opacity: 1, scale: 0.8}}
                transition={{
                    duration: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
                <div className={"divImg"}>
                    <img className={"Img"} src={mix} alt="mix"/>
                </div>
            </motion.div>
            <Options/>
            {/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}
        </div>
    );
}

export default App;


//($env:HTTPS = "true") -and (npm start)