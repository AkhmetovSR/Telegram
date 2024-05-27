// import logo from './logo.svg';
import './App.css'
import mix from "./resource/circle1.png"
import Options from "./Options/Options.jsx";
import Line1 from "./FirstPage/Line1/Line1.jsx";
import Line2 from "./FirstPage/Line2/Line2.jsx";
import {motion} from "framer-motion";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage.jsx";
import SecondPage from "./SecondPage/SecondPage.jsx";

window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
const tg = window.Telegram.WebApp;

function closeApp() {
    tg.close();
}

function App() {
    return (
        <BrowserRouter>
            <div className={"Main"}>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="/invite" element={<SecondPage/>}/>
                </Routes>
                <Options/>
                {/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;


//($env:HTTPS = "true") -and (npm start)