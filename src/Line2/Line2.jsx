import "./Line2.css"
import coin from '../resource/coin.png'

const tg = window.Telegram.WebApp;

function Line2() {
    return (
        <div className={"Line2"}>
                <img className={"coin"} src={coin} alt="coin"/>
                <div className={"quantity"}>10 000 000</div>
        </div>
    );
}

export default Line2;