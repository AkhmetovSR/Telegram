import s from "./StartPage.module.css"
import "../resource/mask.png"
import Writer from "./Writer.jsx";
import { NavLink} from "react-router-dom";

function StartPage(props) {
    let login = props.login;
    const user = props.newOrOldUser;
    const claims = props?.data?.claims;
    let profit = props?.data?.profit;
    const id = props?.data?.id;
    let referal = props?.referal;
    // referal = "AhSR25"
    let congrats = null;
    // console.log(referal)
    // console.log(user)

    if (user === "old") congrats = <div className={s.Congrats}>Congrats!<br/>Your profit +{props.data.profit} coins</div>;
    let seconds = Math.floor(Date.now() / 1000);
    const startTimes = props?.data?.startTimes;                                                                  // Время прошлого старта майнинга
    const mineTime = props?.data?.mineTime;                                                                      // Время майнинга
    let time = seconds - startTimes;                                                                             // Сколько времени майнинга прошло

    async function startMining() {
        login = "AhSR26"
        const reqStart = {
            method: "POST",
            headers: {'login': login, 'profit': profit, 'id': id, "claims": claims, "referal": referal}
        }

        if (user === "new") {                                                                                    // Если пользователь новый, при нажатии на кнопку StartMining отправляется POST запрос на добавление пользователя в БД
            // console.log("new fetch")
            await fetch("http://localhost:8888/addNewUserAndStartMining", reqStart)
                .then(r => console.log(r))
            props.func()
        }

        if (user === "old" && time > mineTime) {                                                                  // Если пользователь старый, отправляется запрос на добавление profit в claims
            // console.log("old fetch")
            await fetch("http://localhost:8888/claimProfit", reqStart)
                .then(r => console.log(r))
            {props.func()}                                                                                        // callback-функция
        }
    }

    return (
        <div className={s.StartPage}>
            <div className={s.Black}>
                <Writer data={props}/>
                <NavLink to='/app1/gamepage'>
                    {congrats}
                    <button className={s.StartMining} onClick={startMining}>Start Mining</button>
                </NavLink>
            </div>
        </div>
    );
}
export default StartPage;

