import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./StartPage/StartPage.jsx";
import App1 from "./App1";


const tg = window.Telegram.WebApp;
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();

//----------------При загрузке страницы отправляется POST запрос c tgUserName в Header, на сервер для, получения данных пользователя.-------------------------------------------

// 1. Получаем tgUserName из тг бота
let login = tg.initDataUnsafe?.user?.username;

// 2. Если имя пользователя не пустое
if(login !== null || login !== ""){
    const reqParam = {
        method: "POST",
        headers: {'login': 'AhSR26'}
    }
    fetch("http://localhost:8888/getUser", reqParam)
        .then((response) => {console.log(response.getHeaders("login"))})
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}


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

export default App; //($env:HTTPS = "true") -and (npm start)


















// let myHeaders = new Headers(); // Создаем новый Header
// myHeaders.append("userName", tgUserName); // Добавляем tgUserName в Header, чтобы отправить в запросе
// myHeaders.append("userName", tgUserName);
// const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     // redirect: "follow"
// };
{/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}


