import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";
import {useState} from "react";
import TryAgain from "./TryAgain";
import GamePage from "./GamePage/GamePage";

const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
let login = tg.initDataUnsafe?.user?.username; // Получаем tgUserName из тг бота

//----------------При загрузке страницы отправляется POST запрос c tgUserName в Header, на сервер для, получения данных пользователя.-------------------------------------------

// При старте, идет запрос в бд на наличие данного пользователя.
// Если пользователь найден и (текущее время - время нажатия старта в прошлый раз) < ~4 часов, то открывается страница gamePage.
// Если > 4 часов, то в бд идет запрос POST на добавление в claim, изменеие времени startMine и открывается стартовая страница с кнопкой запуска.
// Значит запущено не с тг или ошибка получения, отобразить страницу попробовать снова.
login = "AhSR26"
let [page, setPage] = useState(null)
window.addEventListener('load', () => {
    if (!login) setPage(<TryAgain/>) // Если пользователь запустил НЕ из тг или не получен его логин
})
const data = await getData();
console.log(data)



async function getData() {

    if (login) { // Если пользователь запустил из тг и получен его логин
        const reqParam = {
            method: "POST",
            headers: {'login': login}
        }
        const obj = await fetch("http://localhost:8888/", reqParam);
        const result = await obj.json();
        console.log(result)

        let seconds = Math.floor(Date.now() / 1000); // Текущее время в секундах
        const startTime = result[0].startTime; // Время старта майнинга
        const mineTime = result[0].mineTime // Время майнинга
        let time = seconds - startTime //
        console.log(seconds, startTime, mineTime, time)

        if (result.length === 0) setPage(<StartPage/>) // Если пользователь отсутствует в бд, вернуть страницу StartPage  и при нажаитии на startMining передается еще один запрос в БД на добавление пользователя.
        if (result.length !== 0 && (time < mineTime)) { // Если пользователь есть и время время майнинга еще идет, то открываем страницу GamePage, иначе отправляем на стартовую страниу для запуска
            setPage(<GamePage login={result[0].login}/>)
        } else {
            setPage(<StartPage login={result[0].login}/>)
        }
        return result;
    }
}


function App() {
//__________________________________________________ Поверка на получение userName (при загрузке страницы)__________________________________


    // let [data1, setData1] = useState(null)
    // let [page, setPage] = useState(null)
    // login = "AhSR26"
    // window.addEventListener('load', async () => {
    //     if (!login) setPage(<TryAgain/>) // Если пользователь запустил НЕ из тг или не получен его логин
    //     if (login) { // Если пользователь запустил из тг и получен его логин
    //         const reqParam = {
    //             method: "POST",
    //             headers: {'login': login}
    //         }
    //
    //         // Отправляется POST запрос на сервер, на предмет наличия пользователя в БД
    //         async function getData() {
    //             const obj = await fetch("http://localhost:8888/", reqParam);
    //             const result = await obj.json();
    //             return (result)
    //         }
    //         let data = await getData();
    //
    //         let seconds = Math. floor(Date. now() / 1000); // Текущее время в секундах
    //         const startTime = data[0].startTime; // Время старта майнинга
    //         const mineTime = data[0].mineTime // Время майнинга
    //         let time = seconds - startTime //
    //         // console.log(seconds, startTime, mineTime, time)
    //         if(data.length === 0) setPage(<StartPage/>) // Если пользователь отсутствует в бд, вернуть страницу StartPage  и при нажаитии на startMining передается еще один запрос в БД на добавление пользователя.
    //         if(data.length !== 0 && (time < mineTime)) { // Если пользователь есть и время время майнинга еще идет, то открываем страницу GamePage, иначе отправляем на стартовую страниу для запуска
    //             // console.log(time < mineTime)
    //             setPage(<GamePage login={data[0].login}/>)
    //         }else {
    //             setPage(<StartPage login={data[0].login}/>)
    //         }
    //     }
    // });
//_____________________________________________________

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


// //сделать загрузку только через телеграм.
// function closeApp() {
//     tg.close();
// }