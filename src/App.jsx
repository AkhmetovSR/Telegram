import './App.css'
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import GamePage from "./GamePage/GamePage.jsx";
import StartPage from "./StartPage/StartPage.jsx";
import Earn from "./GamePage/Earn/Earn.jsx";
import Invite from "./GamePage/Invite/Invite.jsx";
import Boost from "./GamePage/Boost/Boost.jsx";

const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

function closeApp() {
    tg.close();
}

function App() {
    return (
        <BrowserRouter>
            <div className={"Main"}>
                <Routes>
                    <Route path="/matrix" element={<GamePage/>}/>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/Earn" element={<Earn/>}/>
                    <Route path="/invite" element={<Invite/>}/>
                    <Route path="/boost" element={<Boost/>}/>
                </Routes>
                {/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;


//($env:HTTPS = "true") -and (npm start)