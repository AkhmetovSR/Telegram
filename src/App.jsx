import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";
import TryAgain from "./TryAgain.jsx";
import User from "./getUser"
import Earns from "./getEarns"

const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
let referal = tg?.initDataUnsafe?.start_param;
let login = tg.initDataUnsafe?.user?.username;
// login = "AhSR26"
let page;
if (!login || login === "undefined" || login == null) page = <Navigate to='/tryAgain' replace={true}/>          // Если логина нет, значит TryAgain
const reqGetUserData = {method: "POST", headers: {'login': login, "referal": referal}}

let data = await User.getData(login, reqGetUserData); console.log("Info user ", data)                           // Данные о пользователе
let earns = await Earns.getEarns(login, reqGetUserData);

function App() {
    let user = "";                                                                                              // Пользователь новый или существующий
    function handleChange(){window.location.reload()}

    if (login && data.length === 0) {                                                                           // Если новый пользователь (логин есть, данных нет) - отправляем на страницу StartPage --->
        user = "new"                                                                                            // Пользователь новый (new)
        page = <Navigate to="/startPage" replace={true}/>                                                       // Значит направляем на страницу StartPage (передаем логин и значение new пользователь)
    }

    if (login && data.length !== 0) {                                                                           // Если есть логин и данные (пользователь уже есть в бд)
        user = "old"                                                                                            // Пользователь существующий (old)
        let seconds = Math.floor(Date.now() / 1000);                                                         // Текущее время в секундах
        const startTimes = data[0].startTimes;                                                                  // Время прошлого старта майнинга
        const mineTime = data[0].mineTime;                                                                      // Время майнинга
        let time = seconds - startTimes;                                                                        // Сколько времени майнинга прошло
        if (time < mineTime) page = <Navigate to="/app1/gamePage" replace={true}/>;                             // Если еще майнится, то на страницу майнинга
        if (time > mineTime) page = <Navigate to="/startPage" replace={true}/>;                                 // Если время майнинга прошло, то на страницу startPage (и запрос в бд на добавление profit в claim)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/tryAgain' element={<TryAgain/>}/>
                <Route path='/' element={page}/>
                <Route path='/app1/*' element={<App1 data={data} login={login} newOrOldUser={user} refLink={data} earns={earns}/>}/>
                <Route path='/startPage' element={<StartPage data={data[0]} newOrOldUser={user} login={login} func={handleChange} referal={referal}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App; //($env:HTTPS = "true") -and (npm start)
