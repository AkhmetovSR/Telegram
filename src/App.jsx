import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";

const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

// Подумать как сделать загрузку только через телеграм.

function closeApp() {
    tg.close();
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<StartPage/>}/>
                <Route path='app1/*' element={<App1/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

{/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}

//($env:HTTPS = "true") -and (npm start)
