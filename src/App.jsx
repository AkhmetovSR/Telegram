import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";
import async from "async";

const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

//----------------При загрузке страницы отправляется POST запрос c tgUserName в Header, на сервер для, получения данных пользователя.-------------------------------------------

// 1. Получаем tgUserName из тг бота
let login = tg.initDataUnsafe?.user?.username;
const reqParam = {
    method: "POST",
    headers: {'login': 'AhSR26'}
}

async function getData() {
    const obj = await fetch("http://localhost:8888/", reqParam);
    const result = await obj.json();
    return(result[0].claim)
}

let res = await getData();
console.log(res);

//сделать загрузку только через телеграм.
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

export default App; //($env:HTTPS = "true") -and (npm start)
