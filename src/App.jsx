import './App.css'
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
// import GamePage from "./GamePage/GamePage.jsx";
import StartPage from "./StartPage/StartPage.jsx";
// import Earn from "./GamePage/Earn/Earn.jsx";
// import Invite from "./GamePage/Invite/Invite.jsx";
// import Boost from "./GamePage/Boost/Boost.jsx";
// import Options from "./GamePage/Options/Options";
import App1 from "./App1.jsx";

const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

// alert(screenSize)
// Подумать как сделать загрузку только через телеграм.


function closeApp() {
    tg.close();
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                {/*<Route path="/matrix" element={<GamePage/>}/>*/}
                {/*<Route path="/Earn" element={<Earn/>}/>*/}
                {/*<Route path="/invite" element={<Invite/>}/>*/}
                {/*<Route path="/boost" element={<Boost/>}/>*/}
                <Route path="/app1/*" element={<App1/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;



{/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}

//($env:HTTPS = "true") -and (npm start)
