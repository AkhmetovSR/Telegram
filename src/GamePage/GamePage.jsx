import s from "./GamePage.module.css"
import Matrix from "./Matrix/Matrix.jsx";
import Claims from "./Claims/Claims.jsx";
import Mining from "./Mining/Mining.jsx";
import Options from "./Options/Options.jsx";

const tg = window.Telegram.WebApp;
let login = tg.initDataUnsafe?.user?.username;
login = "AhSR26"

const reqGetUserInfo = {
    method: "POST",
    headers: {'login': login}
}

async function getData() {
    if(!login || login === "undefined" || login == null) return [];                            // Если логина нет, то не делаем запрос в бд и возращаем пустой массив
    if(login) {
        console.log(login)
        const obj = await fetch("http://localhost:8888/", reqGetUserInfo);
        const result = obj.json();
        return (result)
    }
}

let data = await getData();

function GamePage() {
    return (
        <div className={s.GamePage}>
            <Matrix/>
            <div className={s.Content}>
                <Claims data={data[0]}/>
                <Mining/>
                <Options/>
            </div>
        </div>
    );
}

export default GamePage;