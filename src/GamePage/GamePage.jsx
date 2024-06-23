import s from "./GamePage.module.css"
import Matrix from "./Matrix/Matrix.jsx";
import Claims from "./Claims/Claims.jsx";
import Mining from "./Mining/Mining.jsx";
import Options from "./Options/Options.jsx";


const tg = window.Telegram.WebApp;
let login = tg.initDataUnsafe?.user?.username;
// login = "AhSR26"

function GamePage(props) {
    return (
        <div className={s.GamePage}>
            <Matrix/>
            <div className={s.Content}>
                <Claims data={props.data} login={props.login} newOrOldUser={props.newOrOldUser}/>
                <Mining data={props.data}/>
                <Options/>
            </div>
        </div>
    );
}
export default GamePage;