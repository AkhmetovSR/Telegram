import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";


const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
const tgUserName = tg.initDataUnsafe?.user?.username

let userName = "";
let claim = 0;
let refLink = "";
let startTime = Date;

const myHeaders = new Headers();
myHeaders.append("userName", tgUserName);
const requestOptions = {
    method: "POST",
    headers: myHeaders,
    // redirect: "follow"
};

fetch("https://localhost:8888/getAllInfo", requestOptions)
    .then((response) => {
        userName = response.header("userName");
        claim = response.header("claim");
        refLink = response.header("refLink");
        // startTime = response.header("startTime");
        console.log(userName, claim, refLink, startTime);
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// Подумать как сделать загрузку только через телеграм.

function closeApp() {
    tg.close();
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path='app1/*' element={<App1/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

{/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/
}

//($env:HTTPS = "true") -and (npm start)
