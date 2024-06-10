import {BrowserRouter, Link, Navigate, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";
import TryAgain from "./TryAgain.jsx";


const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
let login = tg.initDataUnsafe?.user?.username; // Получаем tgUserName из тг бота

//----------------При загрузке страницы отправляется POST запрос c tgUserName в Header, на сервер для, получения данных пользователя.-------------------------------------------
// login = "AhSR27"
const reqGetUserData = {
    method: "POST",
    headers: {'login': login}
}

async function getData() {
    if(!login || login === "undefined" || login == null) return [];                                             // Если логина нет, то не делаем запрос в бд, просто возвращаем пустой массив
    if(login) {                                                                                                 // Если логина есть, делаем запрос в бд, получаем инфу о пользователе
        // console.log(login)
        const obj = await fetch("http://localhost:8888/", reqGetUserData);
        const result = obj.json();
        return (result)
    }
}

let data = await getData();                                                                                     // Все данные о пользователе будет здесь, после запроса в бд

function App() {
    let page;                                                                                                   // Здесь будет страница, в зависимости от условий, куда будет переправляться пользователь
    let user = "";                                                                                       // Здесь будет значение: новый пользователь или существующий в бд

    if (!login || login === "undefined" || login == null) page = <Navigate to='/tryAgain' replace={true}/>      // Если логина нет, значит зашел в браузере - не даем майнить

    if (login && data.length === 0){                                                                            // Если новый пользователь (логин есть, данных нет) - отправляем на страницу StartPage --->
        user = "new"                                                                                            // Пользователь новый (new)
        page = <Navigate to="/startPage" replace={true}/>                                                       // Значит направляем на страницу StartPage (передаем логин и значение new пользователь)
    }

    if (login && data.length !== 0) {                                                                           // Если есть логин и данные (пользователь уже есть в бд)
        user = "old"                                                                                            // Пользователь существующий (old)
        let seconds = Math.floor(Date.now() / 1000);                                                // Текущее время в секундах
        const startTimes = data[0].startTimes;                                                                  // Время прошлого старта майнинга
        const mineTime = data[0].mineTime                                                                       // Время майнинга
        let time = seconds - startTimes                                                                // Сколько времени майнинга прошло
        if (time < mineTime) page = <Navigate to="/app1/gamePage" replace={true}/>                              // Если еще майнится, то на страницу майнинга
        if (time > mineTime) page = <Navigate to="/startPage" replace={true}/>                                  // Если время майнинга прошло, то на страницу startPage (и запрос в бд на добавление profit в claim)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={page}/>
                <Route path='/app1/*' element={<App1 data={data} login={login}/>}/>
                <Route path='/tryAgain' element={<TryAgain/>}/>
                <Route path='/startPage' element={<StartPage data={data[0]} newOrOldUser={user} login={login}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App; //($env:HTTPS = "true") -and (npm start)





























// Сделать загрузку только через телеграм.
// function closeApp() {*/
// }
// {/*//     tg.close();*/
// }
// {/*// }*/
// }


// За 3 месяца должно быть 100 мультов - для этого в день должно майнится 1 лям 110к по 185к 6 раз в день (24 часа в сутки разделить на каждые 4 часа = 6 раз)
// Чтобы достичь уровня 185 к за каждые 4 часа - нужно прокачать 20 бустов (для начала 5 бустов, далее добавятся новые)
// !!! На главной странице показывается сколько майнится в час. Таже сделать бонус за ежедневный вход и придумать еще интересные идеи типа морзе в хаме.