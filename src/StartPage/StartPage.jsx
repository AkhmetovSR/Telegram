import s from "./StartPage.module.css"
import "../resource/mask.png"
import Writer from "./Writer.jsx";
import {NavLink} from "react-router-dom";


//Передать сюда данные с перехода (новый пользователь или который уже смайнил за 4 часа). 2 ветки условия:
// 1. Если пользователь новый передать profit в час по дефолту 5к.
// 2. Если пользователь смайнил, то показать на странице Congrats, your mine profit +profit из бд (но этот профит добавить в бд при открытии приложения на странице App)
function StartPage(props) {

    const data = props.data;
    const login = props.login;
    const user = props.newOrOldUser;
    const claims = props?.data?.claims;
    let profit = props?.data?.profit;
    const id = props?.data?.id;
    let congrats = null;

    if(user === "old") congrats = <div className={s.Congrats}>Congrats!<br/>Your profit +{props.data.profit} coins</div>;

    async function startMining(){
        const reqStart = {
            method: "POST",
            headers: {'login': login, 'profit': profit, 'id': id, "claims": claims}
        }
        if(user === "new") await fetch("http://localhost:8888/addNewUserAndStartMining", reqStart);     // Если пользователь новый, при нажатии на кнопку StartMining отправляется POST запрос на добавление пользователя в БД
        if(user === "old") await fetch("http://localhost:8888/claimProfit", reqStart);                  // Если пользователь старый, отправляется запрос на добавление profit в claims
    }

    return (
        <div className={s.StartPage}>
            <div className={s.Black}>
                <Writer data={props}/>
                <NavLink to='/app1/gamePage' replace={true}>
                    {congrats}
                    <button className={s.StartMining} onClick={startMining}>Start Mining</button>
                </NavLink>
            </div>
        </div>
    );
}

export default StartPage;