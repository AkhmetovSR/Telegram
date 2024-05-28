import s from "./GamePage.css"
import Matrix from "./Matrix/Matrix.jsx";
import Options from "./Options/Options.jsx";

const tg = window.Telegram.WebApp;


// function viewDiv(){
//     document.getElementById("matrix").style.display = "block";
// };

function GamePage() {
    return (
        <div className={s.GamePage}>
            <Matrix/>
            <Options/>
        </div>
    );
}

export default GamePage;