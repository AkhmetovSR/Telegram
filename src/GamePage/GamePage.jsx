import s from "./GamePage.module.css"
import Matrix from "./Matrix/Matrix.jsx";
import Claims from "./Claims/Claims.jsx";
import Mining from "./Mining/Mining.jsx";
import Options from "./Options/Options.jsx";

const tg = window.Telegram.WebApp;

function GamePage(props) {
    return (
        <div className={s.GamePage}>
            <Matrix/>
            <div className={s.Content}>
                <Claims claims={props.claims}/>
                <Mining/>
                <Options/>
            </div>
        </div>
    );
}

export default GamePage;