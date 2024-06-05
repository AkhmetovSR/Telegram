import s from  "./Claims.module.css"
import coin from "../../resource/greenCoin.png"

const tg = window.Telegram.WebApp;
let userName = tg.initDataUnsafe?.user?.username

function Claims(props) {
    return (
        <div className={s.Claims}>
            <div className={s.UserName}>{userName}</div>
            <div className={s.CoinClaim}>
                <div className={s.Coin}><img src={coin} className={s.imgCoin}/></div>
                <div className={s.Claim}>{props.claims}</div>
            </div>
        </div>
    );
}

export default Claims;